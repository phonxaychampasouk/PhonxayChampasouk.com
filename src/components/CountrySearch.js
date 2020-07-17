import React from 'react';

const CountrySearch = ({ handleChange }) => (
  <input
    onChange={handleChange}
    placeholder="Search for a country"
    type="search"
  />
);

export default CountrySearch;
