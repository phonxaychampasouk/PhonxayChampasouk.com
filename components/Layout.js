import Head from 'next/head';
import Header from './Header';
import NavBar from './NavBar';

const layoutStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
};

const contentStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
};

// inorder to have a document title on every page, use the <head> block in the Layout component template
// be sure to import Head from 'next/head' to modify the title.

const Layout = ({ children }) => (
  <div className="Layout" style={layoutStyle}>

    <Head>
      <title>PHONXAY</title>
    </Head>

    <Header />
    <div className="Content" style={contentStyle}>
      {children}
    </div>
    <NavBar />
  </div>
);

export default Layout;
