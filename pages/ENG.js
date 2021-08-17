import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';

export default function ENG() {
  return (
    <div className="container">
      <Head>
        <title>Bienvenue à Explore & Collaborate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <div className="container">
        <h1 className="title card">Welcome to
        <Link href="/blog/explore" > &nbsp;Explore &  </Link>
        <Link href="/blog/collaborate"> &nbsp; Collaborate !!</Link>
        </h1>


        <h2>This is an Open Source Initiative to Build Resilient Cities & Villages.</h2>

        <div className="container">
         <p>The <a href="https://groups.google.com/g/explore-collaborate" target="_blank">&nbsp;Explore and Collaborate Group </a> hosts workshops to enable cities and villages draft a climate action plan as part on an eco-city project.</p>
         <p>The <Link href="/blog/explore">tool kit</Link> includes interactive web maps with layers on planetary boundries, social foundations, and IPCC climate change senarios for temperature and precipitation, and is shared as a <a href="https://github.com/users/lindangulopez/projects/10"></a>Github Project.</p>

         <h2>The first series of workshops run from <Link href="/blog/collaborate">18 August 2021 - 16 January 2022</Link></h2>
         <h3>The outputs of the workshops are 
         <ul>
         <li>Data sets of 
         <ul>
           <li>planetary boundries; and</li>
           <li>social indicators </li>
         </ul>
         </li>
         <li>Interactive Web Maps; and </li>
         <li>Story Maps of Eco-Cities; and </li>
         <li>This Website as a Template.</li>
         </ul>
        </h3>


          <h3> This Interactive Web Map is a Mash Up of the four Key Layers</h3>
          <p>The key layers are planetary boundries, social foundations, and IPCC climate change senarios for temperature and precipitation.</p>

          <h3>Web Map Hosting, was through the <a href="https://scgismaps.maps.arcgis.com/home/index.html" target="_blank">Society for Conservation & GIS</a></h3>
           
           <h5>All ouptput are shared on </h5>
          
          <p><a href="https://github.com/users/lindangulopez/projects/10" className="card">The Explore & Collaborate Github Project</a>
          <a href="https://arcg.is/0nTnXb0"className="card">Data Science for Sustainability Group</a></p>
          
                    
	         <a href="https://arcg.is/vK1vj0" target="_blank"
            className="card">
 
            <p className="description">Open in Arigis Webmap Viewer</p>
	        <Image 
              src="/images/GL4A.png"
              height={1500}
              width={2000}
              alt="https://www.arcgis.com/home/webmap/viewer.html?webmap=d720c83c1f184fabbd555b1a9c3305a5&extent=-180,-56.2234,180,80.3409"
            />
            <h2 className="card">Mapping a good life for all, within planetary boundries.</h2>
            <p>The Map has layers of the Global Human Settlement Layer Urban Centres Database (GHS-UCDB), which is the most complete open database on cities to date. If you are not signed in to ArcGIS Online or do not have permissions you might get a warning, ignore the warning. </p>
            </a>
  

        <h4>Workshop Requirements
        <ul>
          <li>Participants must complete the <Link href="/blog/collaborate">4 Surveys</Link></li>
          <li>Should have or sign up for an ArcGIS Online Account
          <ul>
          If you do not have an account, it is best to sign up for the 21 day free trial 
            <li>
              during Nov-Dec 2021, when you will need to use the online tools for Storytelling.
            </li>
            <li>or, join the <a href="https://scgismaps.maps.arcgis.com/home/index.html" target="_blank">Society for Conservation and GIS</a></li>
            <ul>
              <li>from whom you will get rights to ArcGIS Pro Tools</li>
              <li>and hosting of Geo-data and Maps</li>
              <li>as well as discounts on Esri training events.</li>
            </ul>
          </ul>
          </li>
        </ul>
        </h4>
        <p>The <Link href="blog/collaborate">Sustainability & Data Science</Link>&nbsp;workshops do not require an ArcGIS Online subscriptions.</p>
        </div>


      </div>

          <h4>Planetary Boundries</h4>

          <p>The key layers are planetary boundries, social foundations, and IPCC climate change senarios for temperature and precipitation.</p>

          <h5>Meta Data</h5>
                    
	         <a href="https://arcg.is/vK1vj0" target="_blank"
            className="card">
 
            <p className="description">Open in Arigis Webmap Viewer</p>
	        <Image 
              src="/images/SPB.png"
              height={1500}
              width={2000}
              alt="https://www.arcgis.com/home/webmap/viewer.html?webmap=d720c83c1f184fabbd555b1a9c3305a5&extent=-180,-56.2234,180,80.3409"
            />
            <h2 className="card">Mapping a good life for all, within planetary boundries.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--ignore-warnings</h2>
            </a>

{/*           <h4>planetary boundries, social foundations, and IPCC climate change senarios for temperature and precipitation</h4>

          <p>The key layers are planetary boundries, social foundations, and IPCC climate change senarios for temperature and precipitation.</p>

          <h5>Meta Data</h5>
                    
	         <a href="https://arcg.is/vK1vj0" target="_blank"
            className="card">
 
            <p className="description">Open in Arigis Webmap Viewer</p>
	        <Image 
              src="/images/GL4A.png"
              height={1500}
              width={2000}
              alt="https://www.arcgis.com/home/webmap/viewer.html?webmap=d720c83c1f184fabbd555b1a9c3305a5&extent=-180,-56.2234,180,80.3409"
            />
            <h2 className="card">Mapping a good life for all, within planetary boundries.</h2>
            <p>The Map has layers of the Global Human Settlement Layer Urban Centres Database (GHS-UCDB), which is the most complete open database on cities to date. If you are not signed in to ArcGIS Online or do not have permissions you might get a warning, ignore the warning. </p>
            </a> */}


          <h4>Social Foundations</h4>

          <p>The key layers are planetary boundries, social foundations, and IPCC climate change senarios for temperature and precipitation.</p>

          <h5>Meta Data</h5>
                    
	         <a href="https://arcg.is/0nuv5e" target="_blank"
            className="card">
 
            <p className="description">Open in Arigis Webmap Viewer</p>
	        <Image 
              src="/images/SLE.png"
              height={1500}
              width={2000}
              alt="https://www.arcgis.com/home/webmap/viewer.html?webmap=d720c83c1f184fabbd555b1a9c3305a5&extent=-180,-56.2234,180,80.3409"
            />
            <h2 className="card">Mapping a good life for all, within planetary boundries.</h2>

            <p>The Map has layers of the Global Human Settlement Layer Urban Centres Database (GHS-UCDB), which is the most complete open database on cities to date. If you are not signed in to ArcGIS Online or do not have permissions you might get a warning, ignore the warning. </p>
            </a>


          <h4>IPCC Climate Change senarios for Temperature change</h4>

          <p>The key layers are planetary boundries, social foundations, and IPCC climate change senarios for temperature and precipitation.</p>

          <h5>Meta Data</h5>
                    
	         <a href="https://arcg.is/vK1vj0" target="_blank"
            className="card">
 
            <p className="description">Open in Arigis Webmap Viewer</p>
	        <Image 
              src="/images/CMT.png"
              height={1500}
              width={2000}
              alt="https://www.arcgis.com/home/webmap/viewer.html?webmap=d720c83c1f184fabbd555b1a9c3305a5&extent=-180,-56.2234,180,80.3409"
            />
            <h2 className="card">Mapping a good life for all, within planetary boundries.</h2>

            <p>The Map has layers of the Global Human Settlement Layer Urban Centres Database (GHS-UCDB), which is the most complete open database on cities to date. If you are not signed in to ArcGIS Online or do not have permissions you might get a warning, ignore the warning. </p>
            </a>
            

          <h4>IPCC Climate change senarios for Precipitation change</h4>

          <p>The key layers are planetary boundries, social foundations, and IPCC climate change senarios for temperature and precipitation.</p>

          <h5>Meta Data</h5>
                    
	         <a href="https://arcg.is/vK1vj0" target="_blank"
            className="card">
 
            <p className="description">Open in Arigis Webmap Viewer</p>
	        <Image 
              src="/images/CMP.png"
              height={1500}
              width={2000}
              alt="https://www.arcgis.com/home/webmap/viewer.html?webmap=d720c83c1f184fabbd555b1a9c3305a5&extent=-180,-56.2234,180,80.3409"
            />
            <h2 className="card">Mapping a good life for all, within planetary boundries.</h2>

            <p>The Map has layers of the Global Human Settlement Layer Urban Centres Database (GHS-UCDB), which is the most complete open database on cities to date. If you are not signed in to ArcGIS Online or do not have permissions you might get a warning, ignore the warning. </p>
            </a>
  

      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

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

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
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
