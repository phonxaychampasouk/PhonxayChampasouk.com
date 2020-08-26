import Head from 'next/head';
import Header from './Header';
import NavBar from './NavBar';

import '../styles/Layout.scss';
  return (
const Layout = ({ children }) => (
  <div className="Layout" style={layoutStyle}>

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
