import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';


export default function CollaborateFR({ isConnected }) /*  */{
  return (

    <div className="container">
      <Head>
        <title>Collaborate to Create Eco-Cities & Villages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

      <div className="container">
        <h1 className="title card">Welcome to<Link href="/" >&nbsp;Explore & Collaborate !!</Link></h1>
        <h2 className="title card">This is an Open Source Initiative to Build Resilient Cities & Villages.</h2>

      </div>

        <div className="grid">
    
       
	 <a href="https://groups.google.com/g/explore-collaborate" target="_blank"
            className="card">
            <h2 className="description">Sign Up &rarr; </h2>
	    <Image 
              src="/images/e1.png"
              height={650}
              width={400}
              alt=""
            />
            <p className="card">To up your skills in Sustainability Science.</p>	    
          </a> 

	  <a href="https://groups.google.com/g/explore-collaborate" target="_blank"
            className="card">
            <h4 className="description">September, 2021 &rarr; </h4>
	    <Image 
              src="/images/e3.png"
              height={650}
              width={400}
              alt=""
            />
            <p className="card">Sustainability & Development Workshop.</p>
          </a>

          <a href="https://groups.google.com/g/explore-collaborate" target="_blank"
            className="card">
            <h4 className="description">October, 2021 &rarr; </h4>
	    	    <Image 
              src="/images/e7.png"
              height={650}
              width={400}
              alt=""
            />
            <p className="card">Data Science Workshop.</p> 
          </a>


          <a href="https://arcg.is/1iyPKG" target="_blank"
            className="card">
            <h4 className="description">November, 2021</h4>
	    <p>To participate in the Data Science Workshop you will need to complete the following surveys. Take your time to complete the surveys, your responses are cached so you can come back to change or complete the submission when you are ready.</p>
	    <h5> The data will be used to create your Web Map. &rarr; </h5>

	    <Image 
              src="/images/survey123.jpg"
              height={170}
              width={100}
              alt="ArcGIS Online Survey 123 Question"
            />
            <p className="card">Step 1: Question the state of the biomome you live in.</p>
          </a>

          <a href="https://arcg.is/0OXD5m" target="_blank"
            className="card">
            <h4 className="description">Model &rarr; </h4>
	    <Image 
              src="/images/survey123.jpg"
              height={65}
              width={40}
              alt="ArcGIS Online Survey 123 Model"
            />
            <p className="card">Step 2: Describe the current sustainability and development model(s) in place.</p>
          </a>

          <a href="https://arcg.is/0jvGr0" target="_blank"
            className="card">
            <h4 className="description">Analyse &rarr; </h4>
	   <Image 
              src="/images/survey123.jpg"
              height={65}
              width={40}
              alt="ArcGIS Online Survey 123 Analyse"
            />
            <p className="card">Step 3: Evaluate your selected cities or village's strategies to build resilience.</p>
          </a>

          <a href="https://arcg.is/1W4W4G1" target="_blank"
            className="card">
            <h4 className="description">Implement &rarr; </h4>
	    <Image 
              src="/images/survey123.jpg"
              height={170}
              width={100}
              alt="ArcGIS Online Survey 123 Implement"
            />
            <p className="card">Step 4: Engage with interested and affected parties to roll out an Eco-City.</p>
          </a>
 
          <a href="https://www.esri.com/en-us/lg/training-and-services/learn-arcgis-education-trial" target="_blank"
	  className="card">
            <h4 className="description">Draft your Story &rarr;</h4>
            <p>Now that you have set up your Eco-City, you can start to send out you message to your target audiance.</p>
	    <p className="card">Step 1: Structure the narative</p>
	    <p>If you do not have an ArcGIS Online account, you can use the 21 day trial for this workshop.</p>
          </a>

	  <a href="https://groups.google.com/g/explore-collaborate" target="_blank"
            className="card">
            <h4 className="description">November, 2021 &rarr; </h4>
	    	    <Image 
              src="/images/e11.png"
              height={650}
              width={400}
              alt=""
            />
            <p className="card">Data Science Workshop.</p>
          </a>

	  <a href="https://www.esri.com/en-us/lg/training-and-services/learn-arcgis-education-trial" target="_blank"
            className="card">
            <h4 className="description">December, 2021 &rarr; </h4>
	    	    <Image 
              src="/images/e15.png"
              height={650}
              width={400}
              alt=""
            />
            <p className="card">Story Map Workshop.</p>
	    
          </a>

	  <a href="https://groups.google.com/g/explore-collaborate" target="_blank"
            className="card">
            <h4 className="description">January 2022 &rarr; </h4>
	    	    <Image 
              src="/images/e19.png"
              height={650}
              width={400}
              alt=""
            />
            <p className="card">Eco-Web Development Workshop.</p>
          </a>

         <a href="https://github.com/users/lindangulopez/projects/10" target="_blank" className="card">
            <p className="description">Learn &rarr; </p>
            <p>Step 1: Take the Next.js getting started tutorial.</p>
	    <br></br>

            <p className="description">Fork &rarr; </p>
            <p>Step 2: request to collaborate on the Github project.</p>

	    <br></br>

            <p className="description">Blog &rarr;</p>
            <p>Step 3: write an article for the blog about your eco-city project.</p>

	    <br></br>

            <p className="description">REPLICATE &rarr; </p>
            <p>Step 4: translate the eco-city template to a language other than French or English.</p>

	    <h2 className="card">Host an Eco-Web Workshop.</h2>
          </a>

        </div>













      
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

