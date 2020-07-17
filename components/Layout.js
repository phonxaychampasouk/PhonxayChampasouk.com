import Head from 'next/head';
import Header from './Header';
import NavBar from './NavBar';

import './Layout.scss';

/* inorder to have a document title on every page, use the <head> block
in the Layout component template be sure to import Head from 'next/head' to modify the title. */

const Layout = ({ children }) => (
  <div className="Layout">

    <Head>
      <title>PHONXAY</title>
    </Head>

    <Header />
    <div className="Content">
      {children}
    </div>
    <NavBar />
  </div>
);

export default Layout;
