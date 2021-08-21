import Link from 'next/link';
import classes from './main-header.module.css';
import Image from 'next/image';

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.navigation}>
      <button className="btn"><Link href='/FR'>[&nbsp;FR&nbsp;]&nbsp;</Link></button> <button className="btn"><Link href='/ENG'>&nbsp;[&nbsp;ENG&nbsp;]</Link></button> 
      </div>
      <button className="btn"><Link href='/'>ECO-CITY</Link></button>
    </header>
  );
}


export default MainHeader;
