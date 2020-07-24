import Link from 'next/link';

import './Header.scss';

const Header = ({ appTitle }) => (
  <div className="container">
  <Link href="/">
    <div className="Header">{appTitle}</div>
  </Link>
  </div>
);

export default Header;
