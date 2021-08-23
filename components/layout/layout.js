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
      <h2><Link href="/feedback">Feedback</Link></h2>
      <p></p>
      <hr />
      <hr/>
     <div>
            <footer className="footer">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
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
