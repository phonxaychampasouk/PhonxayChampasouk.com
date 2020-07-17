import Head from 'next/head';
import Header from './Header';
import NavBar from './NavBar';

import './Layout.scss';
import './index.scss';

/* inorder to have a document title on every page, use the <head> block
in the Layout component template be sure to import Head from 'next/head' to modify the title. */


// Layout.js is a good data data hydration point for apps UI
const Layout = ({ children }) => {
  const appTitle = '> Phonxay Champasouk';
  return (
    <div className="Layout">

      <Head>
        <title>PHONXAY</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <Header appTitle={appTitle} />
      <div className="Content">
        {children}
      </div>
      <NavBar />
    </div>
  );
};
export default Layout;
