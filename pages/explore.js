import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';


export default function Explore({ isConnected }) {
  return (
    <>

    <div className="container">
      <Head>
        <title>Explore Sustainable Urban Development Tools</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

      <div className="container">
        <h1 className="title card">Welcome to<Link href="/" >&nbsp;Explore & Collaborate !!</Link></h1>

                          <Image 
              src="/images/ECO.png"
              height={650}
              width={750}
              alt=""
            />

        <h2 className="title card">This is a list of resources to help you Build Resilient Cities & Villages.</h2>       

      </div>


      <h3>  <a href="https://groups.google.com/g/explore-collaborate" target="_blank"
            className="card">Workshops have been set up</a> </h3>
            <p>to strengthen your skills in sustainable-development-and-development, data science, story-telling-with-story-maps and eco-web-development.</p>

  <p>Upcoming Content: </p>  
	<p>September 2021 - January 2022</p>
  <h4 className="description">Environmental Consulting & Workshops</h4>


	<ul>
	<dt>Workshops resources</dt>
	<dd>Invitation to Collaborate</dd>
	<dd>Invitation à collaborer</dd>
  <dt>https://github.com/users/lindangulopez/projects/10#column-15395375</dt>
	<dd>Sustainability & Development</dd>
  <dd>Développement durable et développement</dd>
  <dt>https://github.com/users/lindangulopez/projects/10#column-15395582</dt>
	<dd>Beyond the SDGs</dd>
	<dd>Au-delà des ODDs</dd>
  <dt>https://github.com/users/lindangulopez/projects/10#column-15395582</dt>
	<dd>Data Science</dd>
  <dd>Science des données</dd>
  <dt>https://github.com/users/lindangulopez/projects/10#card-67251931</dt>
	<dd>Story Map</dd>
	<dd>Carte de l'histoire</dd>
  <dt>https://github.com/users/lindangulopez/projects/10#card-67136105</dt>
	<dd>Eco Web Development</dd>
	<dd>Développement Web Éco</dd>
  <dt>https://lindangulopez.github.io/CRI2/</dt>
	<dt>Environmental Consulting</dt>
	<dd>Climate Action Plans</dd>
	<dd>Plans d'Action Climate</dd>
  <dt>https://www.linkedin.com/in/lindangulopez/</dt>
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

