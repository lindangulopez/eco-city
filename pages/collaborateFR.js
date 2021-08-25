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
        <h1 className="title card">Bienvenue sur<Link href="/" >&nbsp;Explore & Collaborate !!</Link></h1>

                      <Image 
              src="/images/ECO.png"
              height={650}
              width={750}
              alt=""
            />


        <h2 className="title card">Il s'agit d'une initiative open source pour construire des villes et des villages résilients. </h2>

      </div>

        <div className="grid">
    
       
	 <a href="https://groups.google.com/g/explore-collaborate" target="_blank"
            className="card">
            <h2 className="description">INSCRIVEZ-VOUS &rarr; </h2>
	    <Image 
              src="/images/e2.png"
              height={650}
              width={400}
              alt=""
            />
            <p className="card">Pour améliorer vos compétences en science de la durabilité. </p>	    
          </a> 

	  <a href="https://groups.google.com/g/explore-collaborate" target="_blank"
            className="card">
            <h4 className="description">Septembre 2021  &rarr; </h4>
	    <Image 
              src="/images/e4.png"
              height={650}
              width={400}
              alt=""
            />
            <p className="card">Atelier sur la durabilité et le développement. </p>
          </a>

          <a href="https://groups.google.com/g/explore-collaborate" target="_blank"
            className="card">
            <h4 className="description">Octobre, 2021 &rarr; </h4>
	    	    <Image 
              src="/images/e8.png"
              height={650}
              width={400}
              alt=""
            />
            <p className="card">Atelier de dévelopment durable.</p> 
          </a>


          <a href="https://arcg.is/0SO8ui" target="_blank"
            className="card">
            <h4 className="description">Novembre, 2021</h4>

	    <p>Pour participer à l'atelier sur la science des données, vous devrez répondre aux sondages suivants. Prenez votre temps pour répondre aux sondages, vos réponses sont mises en cache afin que vous puissiez revenir pour modifier ou compléter la soumission lorsque vous êtes prêt.</p>
	    <h5>Les données seront utilisées pour créer votre carte Web. &rarr; </h5>

	    <Image 
              src="/images/survey123.jpg"
              height={170}
              width={100}
              alt="ArcGIS Online Survey 123 Question"
            />
            <p className="card">Étape 1 : Questionnez l'état du biome dans lequel vous vivez.</p>
          </a>

          <a href="https://arcg.is/1rnXfj" target="_blank"
            className="card">
            <h4 className="description">Model &rarr; </h4>
	    <Image 
              src="/images/survey123.jpg"
              height={65}
              width={40}
              alt="ArcGIS Online Survey 123 Model"
            />
            <p className="card">Étape 2 : Décrivez le(s) modèle(s) de développement durable et de développement actuellement en place.</p>
          </a>

          <a href="https://arcg.is/4ermv" target="_blank"
            className="card">
            <h4 className="description">Analyse &rarr; </h4>
	   <Image 
              src="/images/survey123.jpg"
              height={65}
              width={40}
              alt="ArcGIS Online Survey 123 Analyse"
            />
            <p className="card">Étape 3 : Évaluez les stratégies de vos villes ou villages sélectionnés pour renforcer la résilience.</p>
          </a>

          <a href="https://arcg.is/0PWjKy" target="_blank"
            className="card">
            <h4 className="description">Implement &rarr; </h4>
	    <Image 
              src="/images/survey123.jpg"
              height={170}
              width={100}
              alt="ArcGIS Online Survey 123 Implement"
            />
            <p className="card">Étape 4 : S'engager avec les parties intéressées et affectées pour déployer une éco-ville.</p>
          </a>
 
          <a href="https://www.esri.com/en-us/lg/training-and-services/learn-arcgis-education-trial" target="_blank"
	  className="card">
            <h4 className="description">Rédigez votre histoire  &rarr;</h4>
            <p>Maintenant que vous avez mis en place votre Eco-City, vous pouvez commencer à envoyer votre message à votre public cible.</p>
	    <p className="card">Étape 1 : Structurer le récit </p>
	    <p>Si vous n'avez pas de compte ArcGIS Online, vous pouvez utiliser la version d'essai de 21 jours pour cet atelier.</p>
          </a>

	  <a href="https://groups.google.com/g/explore-collaborate" target="_blank"
            className="card">
            <h4 className="description">Novembre, 2021 &rarr; </h4>
	    	    <Image 
              src="/images/e12.png"
              height={650}
              width={400}
              alt=""
            />
            <p className="card">Atelier de science des données.</p>
          </a>

	  <a href="https://www.esri.com/en-us/lg/training-and-services/learn-arcgis-education-trial" target="_blank"
            className="card">
            <h4 className="description">Décembre, 2021 &rarr; </h4>
	    	    <Image 
              src="/images/e16.png"
              height={650}
              width={400}
              alt=""
            />
            <p className="card">Atelier Story Map.</p>
	    
          </a>

	  <a href="https://groups.google.com/g/explore-collaborate" target="_blank"
            className="card">
            <h4 className="description">Janvier, 2022 &rarr; </h4>
	    	    <Image 
              src="/images/e19.png"
              height={650}
              width={400}
              alt=""
            />
            <p className="card">Atelier de développement éco-Web.</p>
          </a>

         <a href="https://github.com/users/lindangulopez/projects/10" target="_blank" className="card">
            <p className="description">Learn &rarr; </p>
            <p>Étape 1 : suivez le tutoriel de démarrage Next.js.</p>
	    <br></br>

            <p className="description">Fork &rarr; </p>
            <p>Étape 2 : demander à rejoindre la Vercel Team ou collaborer sur le projet Github.</p>

	    <br></br>

            <p className="description">Blog &rarr;</p>
            <p>Étape 3 : rédigez un article pour le blog sur votre projet d'éco-ville.</p>

	    <br></br>

            <p className="description">REPLICATE &rarr; </p>
            <p>Étape 4 : traduisez le modèle éco-ville dans une langue autre que le français ou l'anglais.</p>

	    <h2 className="card">Organisez un atelier Eco-Web.</h2>
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

