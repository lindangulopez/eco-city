import Link from 'next/link';
import classes from './main-header.module.css';
import Image from 'next/image';

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.navigation}>
        <Link href='/FR'>[&nbsp;FR&nbsp;]&nbsp;</Link> <Link href='/ENG'>&nbsp;[&nbsp;ENG&nbsp;]</Link>

      </div>
      <nav className={classes.logo}>
        <ul>
          <li>
            <Link href='/'>ECO</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}


export default MainHeader;
