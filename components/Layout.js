import Head from 'next/head';
import Header from './Header';
import NavBar from './NavBar';

import './Layout.scss';

/* inorder to have a document title on every page, use the <head> block
in the Layout component template be sure to import Head from 'next/head' to modify the title. */

// Layout.js is a good data data hydration point for apps UI
const Layout = ({ children }) => {
  const appTitle = '> Phonxay Champasouk';
  return (
    <main className="Layout">

      <Head>
        <title>PHONXAY</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <Header appTitle={appTitle} />
      <div className="main">
        {children}
      </div>
      <NavBar />
    </main>
  );
};
export default Layout;
