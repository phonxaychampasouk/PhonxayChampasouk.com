import Link from 'next/link';

import './Header.scss';

const Header = ({ appTitle }) => (
  <Link href="/">
    <div className="Header">{appTitle}</div>
  </Link>
);

export default Header;
