import { Fragment } from 'react';
import Link from 'next/link';

import MainHeader from './main-header';

function Layout(props) {
  return (
    <Fragment>
      <MainHeader />
      <hr />
      <main>{props.children}</main>
      <hr/>
      <h2><Link href="/feedback">Bookings & Feedback</Link></h2>
      <p><Link href="/policy">An Open Source and Creative Commons Project</Link></p>
      <p></p>
      <hr />
      <hr/>
     <div>
            <footer className="footer">
          
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
         <p className ="small"> Powered by {' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo"/></p>
        </a>
      </footer>
    </div>
      <hr/>
    </Fragment>
  );
}

export default Layout;
