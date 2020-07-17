/* eslint-disable no-async-promise-executor */
import React from 'react';
import { assign, Machine } from 'xstate';
import { useMachine } from '@xstate/react';
import CountrySelector from '../src/components/CountrySelector';
import Stat from '../src/components/stat';
import CountrySearch from '../src/components/CountrySearch';

const statsApi = 'https://coronavirus-19-api.herokuapp.com/countries';

//  when page is loaded the machine will fetch the initial stats first.
const statsMachine = Machine(
  {
    id: 'statsMachine',
    initial: 'fetchStats',
    context: {
      countriesSelected: [],
      stats: null,
    },
    states: {
      fetchStats: {
        invoke: {
          src: () => new Promise(async (resolve, reject) => {
            try {
              const stats = await fetch(statsApi).then((response) => response.json());
              return resolve(stats);
            } catch (error) {
              console.log('error in fetching stats: ', error);
              return reject(error);
            }
          }),
          /*
           onDone's target is the next target state, actions is how the state saves the 
           returned promise to the machine
           actions simutaneously assigns the stats and the state moves to the target state
          */

          onDone: { target: 'ready', actions: 'assignStats' },
          onError: 'error',
        },
      },
      ready: {
        on: {
          COUNTRY_SELECTED: { actions: 'updateSelectedCountry' },
        },
      },
      error: {},
    },
  },
  {
  // assign keyword is letting you know it is assigning a new prop, context is what is in you state
  // event is the returned promise
    actions: {
      assignStats: assign((_context, event) => ({
        stats: event.data,
      })),

      updateSelectedCountry: assign((context, event) => ({
        countriesSelected: context.stats.reduce(
          (acc, stat) => (stat.country
            .toLowerCase()
            .match(event.country.target.value.toLowerCase())
            ? [...acc, stat]
            : acc),
          [],
        ),
      })),
    },
  },
);
const IndexPage = () => {
  const [current, send] = useMachine(statsMachine);
  return (
    <>
      <h3>CoronaVirus Information</h3>
      {current.matches('fetchStats') && <div>Loading Stats…</div>}
      {current.matches('error') && <div>Error fetching stats…</div>}
      {current.matches('ready') && (
      <>

        <CountrySelector
          stats={current.context.stats}
          handleChange={(country) => send('COUNTRY_SELECTED', { country })}
        />

        <CountrySearch
          handleChange={(country) => send('COUNTRY_SELECTED', { country })}
        />

      </>
      )}

      {current.context.countriesSelected.length > 0 && (
      <Stat stats={current.context.countriesSelected} />
      )}

    </>
  );
};
export default IndexPage;
