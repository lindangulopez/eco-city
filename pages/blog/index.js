import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';


export default function Collaborate({ isConnected }) /*  */{
  return (
<>

    <div className="container center">
      <Head>
        <title>Collaborate to Create Eco-Cities & Villages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

	<h1>Upcoming Content: </h1>  
	<h2>September 2021 - January 2022</h2>
        <h4 className="description">Environmental Consulting & Workshops</h4>
	<ul>
	<dt>Workshops</dt>
	<dd>Invitation to Collaborate</dd>
	<dd>Invitation à collaborer</dd>
	<dd>Sustainability & Development</dd>
	<dd>Développement durable et développement</dd>
	<dd>Beyond the SDGs</dd>
	<dd>Au-delà des ODDs</dd>
	<dd>Data Science</dd>
	<dd>Science des données</dd>
	<dd>Story Map</dd>
	<dd>Carte de l'histoire</dd>
	<dd>Eco Web Development</dd>
	<dd>Développement Web Éco</dd>
	<dt>Environmental Consulting</dt>
	<dd>Climate Action Plans</dd>
	<dd>Plans d'Action Climate</dd>
	</ul>

	
      
      </main>





      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }


        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
       }

        .title,
        .description {
          text-align: center;
        }

        .subtitle {
          font-size: 2rem;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
          color: orange;
          text-transform: uppercase;
          
        }

        .description2 {
          line-height: 1.25;
          font-size: 1rem;
          color: orange;
          text-transform: uppercase;
          
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
    </>


  )
}

