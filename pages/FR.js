import path from 'path';
import fs from 'fs/promises';
import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/event-list';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Fragment } from 'react';


function HomePage(props) {
  const { products } = props;

  return (
    <>
    <div className="container center">
    <h1 className="title description">
    <a href="https://github.com/users/lindangulopez/projects/10" target="_blank">Bienvenue sur Explore & Collaborate &rarr; </a> 
    </h1>

    
          <h2><Link href="/events/e15" >Cartographier une bonne vie pour tous dans les limites planétaires.</Link></h2>
          <button className="btn">
          <Image 
              src="/images/GL4A.png"
              height={900}
              width={1400}
              alt="Géo-données pour Explore & Collaborate"
            />
          </button>
     
      <h2>L'objectif de ce projet est de mettre en place une méthodologie et une base de données géographiques open source à exploiter par les villes et les villages pour élaborer des plans d'action climat.</h2> 
      <p>La principale source de données est &nbsp;<a href="https://www.socialprogressindex.com/">l'indice de progrès social</a>&nbsp;&nbsp;et les couches de risque climatique du&nbsp;<a href="https://interactive-atlas.ipcc.ch/">IPCC</a>&nbsp;qui seront extraites, modélisées et téléchargées sur la base de données géographiques hébergée par la Society for Conservation and GIS,&nbsp;<strong><a href="https://scgismaps.maps.arcgis.com/home/index.html">le SCGIS</a></strong> sur la carte&nbsp;<a href="https://arcg.is/4r5yb">Mapping a good life for all within planetary boundaries</a>&nbsp;une carte web.</p>
      <p><strong>Veuillez rejoindre le SCGIS pour obtenir un compte ArcGIS Online gratuit et accéder à toutes les couches utilisées dans la carte Web.</strong></p>
      
      <hr />

      <h2><Link href="blog/collaborate">Collaborater</Link></h2>
      <p>Il s'agit d'une initiative Open Source et Creative Commons pour construire des villes et des villages résilients, vous pouvez contribuer en assistant à des ateliers ou en travaillant sur le site Web Next.js.</p>
         
            <button className="btn">     
            <Image 
              src="/images/SAW.jpg"
              height={400}
              width={400}
              alt="Au-delà des objectifs de développement durable (ODD) : aborder la durabilité et le développement"
            />
            <h4>Plans d'action climat</h4>
            <p>pour Villes & Villages.</p>
            </button>

            <button className="btn">      
            <Image 
              src="/images/SDG10-FR.png"
              height={400}
              width={400}
              alt="Objectif 10 des ODD. Réduire les inégalités au sein des pays et entre eux"
            />
            <h3>Réduire les inégalités</h3>
            <p>à l'intérieur et entre les pays.</p>
          </button>

     <p>Après avoir assisté à tous les ateliers, les participants auraient ou seraient capables de créer une Story Map ArcGIS et ont contribué au projet en ajoutant des données à la carte Web.</p>  


      <h4><Link href="/events/e3">Aller au-delà des objectifs de développement durable</Link></h4>
      <p>Découvrez pourquoi il est nécessaire de mettre la durabilité et le développement sur le même pied et d'aller au-delà des objectifs de développement durable, les ODD. Les ateliers se concentrent sur ces trois ODD, 10-11-13, nous explorerons comment leurs indicateurs se chevauchent et interagissent et pourquoi il est nécessaire de construire des plans d'action climatique en pensant à eux.</p>
      
        
          <button className="btn">      
            <Image 
              src="/images/SDG11-FR.png"
              height={400}
              width={400}
              alt="Objectif ODD 11. Rendre les villes et les établissements humains inclusifs, sûrs, résilients et durables"
            />
            <h3>Faire des villes et les établissements</h3>
            <p>humains inclusifs, sûrs, résilients et durables.</p> 
          </button>

            <button className="btn">      
            <Image 
              src="/images/SDG13-FR.png"
              height={400}
              width={400}
              alt="Objectif ODD 13. Prendre des mesures urgentes pour lutter contre le changement climatique et ses impacts"
            />
            <h3>&nbsp;&nbsp;&nbsp;Prendre des mesures urgentes&nbsp;&nbsp;&nbsp;</h3>
            <p>pour lutter contre le changement climatique et ses impacts.</p>
          </button>

     <br></br>
           <h2><Link href="blog/explore">Explorer</Link>
      </h2>
      <p>Cette plate-forme héberge un ensemble de ressources pour des Professionals ArcGIS et de Développement Durable Sustainability afin de vous aider à construire des villes et des villages résilients. Participez aux ateliers de &nbsp;<Link href="/events/e4" >septembre-octobre</Link>&nbsp;pour en savoir plus sur les risques écologiques auxquels votre ville ou ville natale est confrontée et pourquoi il est important d'aller au-delà des ODD pour lutter contre le changement climatique et les inégalités.</p>
      
            <button className="btn">     
            <Image 
              src="/images/CMP.png"
              height={300}
              width={400}
              alt="https://interactive-atlas.ipcc.ch/"
            />
            <h4>Précipitation</h4>
            <p>en tant que risque climatique.</p>
          </button>



        <button className="btn">      
            <Image 
              src="/images/CMT.png"
              height={300}
              width={400}
              alt="https://interactive-atlas.ipcc.ch/"
            />
            <h4>Température</h4>
            <p>comme un risque climatique.</p>
        </button>

      <p><Link href="/events/e12" >Novembre</Link>&nbsp;est le temps de la science des données, vous devrez remplir quatre enquêtes pour en savoir plus sur les fondements sociaux et les limites planétaires de la ville ou du village sur lequel vous avez choisi de travailler. Et modéliser comment nous pouvons lutter contre le changement climatique et réduire les inégalités dans nos communautés en utilisant la biométrie pour créer un environnement urbain durable.</p>
           
           <button className="btn">      <a href="https://www.ecologyandsociety.org/vol14/iss2/art32/" target="_blank"
            className="card">
            <Image 
              src="/images/PB.png"
              height={300}
              width={400}
              alt="Une bonne vie pour tous dans les limites planétaires"
            />
            <h4>Écologie et société</h4>
          </a></button>

          <button className="btn">      
            <Image 
              src="/images/CDS.png"
              height={300}
              width={400}
              alt="Modèle Une bonne vie pour tous dans les limites de la planète"
            />
            <br></br>
            <h4>Science des données</h4>
            <br></br><br></br>
           </button>
      
      <p>En&nbsp;<Link href="/events/e16">décembre</Link>&nbsp;nous parlerons de l'engagement des parties prenantes et de la narration, pour faire passer votre message et le déployer. Dans la dernière série d'ateliers, nous vous montrerons comment reproduire ce projet Github et utiliser ce site Web Next.js comme modèle pour votre propre projet d'éco-ville.</p>
          <button className="btn">    
            <Image 
              src="/images/BWT.png"
              height={300}
              width={400}
              alt="Deux versions différentes de l'environnementalisme"
            />
            <h4>Plafond Vert</h4>
            <p>réduire les inégalités dans les mouvements écologistes.</p>
          </button>
      <p>Les ateliers vous guideront sur la façon de configurer et d'obtenir un compte ArcGIS Online et Github, ce qui vous permettra de collaborer en participant à des ateliers. Vous pouvez également contribuer au &nbsp;<Link href="/events/e20">développement du site internet</Link>&nbsp; par exemple en traduisant le modèle d'éco-ville dans une langue autre que le français ou l'anglais.</p>

      <h3><Link  href="/events">Thèmes des ateliers</Link></h3>
 

   </div>

    <div>
   
    <div className="container center">
               
   
   </div>
      <EventList items={props.events} />
    </div>

    
   </>
  );
}


export async function getStaticProps(context) {
  console.log('(Re-)Generating...');
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  const featuredEvents = await getFeaturedEvents();

  if (!data) {
    return {
      redirect: {
        destination: '/no-data',
      },
    };
  }

  if (data.products.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      products: data.products,
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
