import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';


export default function Home({ isConnected }) {
  return (

    <div className="container">
      <Head>
        <title>Explore Sustainable Urban Development Tools</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

      <div className="container">
        <h1 className="title card">Welcome to<Link href="/" >&nbsp;Explore & Collaborate !!</Link></h1>

        <h2 className="title card">This is a list of resources to help you Build Resilient Cities & Villages.</h2>

        <iframe width="370" height="300" src="https://www.youtube.com/embed/ha4V-mmAO6E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        
      </div>

        <div className="grid">
            
          <a href="https://sdgs.un.org/goals/goal13" target="_blank"
            className="card">
            <h4 className="description">A Good Life &rarr; </h4>
            <p>Do you want to create a climate action plan?</p>
            <Image 
              src="/images/SDG13-EN.png"
              height={350}
              width={350}
              alt=""
            />
          </a>

          <a href="https://grist.org/climate-energy/are-there-two-different-versions-of-environmentalism-one-white-one-black/" target="_blank"
            className="card">
            <h4 className="description">For All &rarr; </h4>
            <p>But feel like you've reached the green ceiling !!</p>
            <Image 
              src="/images/SDG11-EN.png"
              height={350}
              width={350}
              alt="Different versions of environmentalism"
            />
          </a>

          <a href="https://sdgs.un.org/goals/goal10"
            className="card">
            <h4 className="description">Explore &rarr; </h4>
            <p>How to tackle climate change and reduce inequalities.</p>
            <Image 
              src="/images/SDG10-EN.png"
              height={350}
              width={350}
              alt=""
            />
          </a>

          <a href="https://biomimicry.net/the-buzz/resources/designlens-lifes-principles/" target="_blank"
            className="card">
            <h4 className="description">Go beyond the SDGs &rarr; </h4>
            <p>Ask nature how you can build resilance.</p>
            <Image 
              src="/images/BAN.png"
              height={350}
              width={350}
              alt=""
            />
          </a>

          <a href="https://interactive-atlas.ipcc.ch/" target="_blank"
            className="card">
            <h4 className="description">IPCC Climate Model, Precipitation &rarr; </h4>
            <p>Get to know the risks your home town or city faces.</p>
            <Image 
              src="/images/CMP.png"
              height={350}
              width={400}
              alt="Climate Models: 2040 - 2059 Analyses Moderate Emissions (RCP 4.5) - Precipitation"
            />
          </a>

          <a href="https://interactive-atlas.ipcc.ch/" target="_blank"
            className="card">
            <h4 className="description">Ask the right questions &rarr; </h4>
            <p>Are you more at risk to drought or flooding?</p>
            <Image 
              src="/images/CMT.png"
              height={350}
              width={400}
              alt="Climate Models: 2040 - 2059 Analyses Moderate Emissions (RCP 4.5) - Temperature"
            />
          </a>


          <a href="https://groups.google.com/g/explore-collaborate" target="_blank"
            className="card">
            <h4 className="description">Take Action &rarr; </h4>
            <p>Ensure Stakeholder Engagement.</p>
            <Image 
              src="/images/ECO.png"
              height={350}
              width={400}
              alt=""
            />
          </a>

      </div>

      <h3>  <a href="https://groups.google.com/g/explore-collaborate" target="_blank"
            className="card">Workshops have been set up</a> </h3>
            <p>to strengthen your skills in sustainable-development-and-development, data science, story-telling-with-story-maps and eco-web-development.</p>
      
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

  )
}

