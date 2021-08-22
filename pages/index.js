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
    <a href="https://github.com/users/lindangulopez/projects/10" target="_blank">Welcome to Explore & Collaborate &rarr; </a> 
    </h1>

       
          <h2><Link href="/events/e15" >Mapping a good life for all within planetary boundaries.</Link></h2>
          <button className="btn">
          <Image 
              src="/images/GL4A.png"
              height={900}
              width={1400}
              alt="Geo-Data for Explore & Collaborate"
            />
          </button>
     
      <h2>The aim of this project is to set up a methodology and opensource Geo-data base for cities and villages to exploit so that they can draft Climate Action Plans.</h2> 
      <p>The key data source is the&nbsp;<a href="https://www.socialprogressindex.com/"> Social Progress Index</a>&nbsp;&nbsp;and the IPCC's&nbsp;<a href="https://interactive-atlas.ipcc.ch/">Climate Risk Layers</a>&nbsp; which will be sourced, modeled and uploaded to the geo-data base hosted by the Society for Conservation and GIS, <strong><a href="https://scgismaps.maps.arcgis.com/home/index.html">the SCGIS</a></strong> on the &nbsp;<a href="https://arcg.is/4r5yb">Mapping a good life for all within planetary boundaries</a>&nbsp;web map.</p>
      <p><strong>Please join the SCGIS, to get a free ArcGIS Online Account and access to all the layers used in the web map.</strong></p>
      
      <hr />

      <h2><Link href="blog/collaborate">Collaborate</Link></h2>
      <p>This is an Open Source and Creative Commons Initiative to Build Resilient Cities & Villages, you can contribute by attending workshops or working on the Next.js website.</p>
         
            <button className="btn">     
            <Image 
              src="/images/SAW.jpg"
              height={400}
              width={400}
              alt="Beyond the Sustainable Development Goals (SDGs) : Addressing Sustainability and Development "
            />
            <h4>Climate Action Plans</h4>
            <p>for Cities & Villages.</p>
            </button>

            <button className="btn">      
            <Image 
              src="/images/SDG10-EN.png"
              height={400}
              width={400}
              alt="SDG Goal 10. Reduce inequality within and among countries"
            />
            <h3>Reduce inequality</h3>
            <p>within and among countries.</p>
          </button>

     <p> After attending all the workshops participants would have or be able to created an ArcGIS Story Map and contributed to the project by adding data to the web map.</p>  


      <h4><Link href="/events/e3">Go beyond the Sustainability Development Goals</Link></h4>
      <p>Learn why it it necessary to put sustainability and development on the same footing and go beyond the Sustainability Development Goals, SDGs. Workshops focus on these three 3 SDGs, 10-11-13, we will explore how their indicators overlap and interact and why it is necessary to build climate action plans with them in mind.</p>
      
        
          <button className="btn">      
            <Image 
              src="/images/SDG11-EN.png"
              height={400}
              width={400}
              alt="SDG Goal 11. Make cities and human settlements inclusive, safe, resilient and sustainable"
            />
            <h3>Make cities and human</h3>
            <p>settlements inclusive,safe, resilient and sustainable.</p> 
          </button>

            <button className="btn">      
            <Image 
              src="/images/SDG13-EN.png"
              height={400}
              width={400}
              alt="SDG Goal 13. Take urgent action to combat climate change and its impacts"
            />
            <h3>&nbsp;&nbsp;&nbsp;&nbsp;Take urgent action&nbsp;&nbsp;&nbsp;&nbsp;</h3>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;to combat climate change and its impacts.&nbsp;&nbsp;&nbsp;&nbsp;</p>
          </button>

     <br></br>
           <h2><Link href="blog/explore">Explore</Link>
      </h2>
      <p>This platform hosts a set of resources for ArcGIS Sustainability Professionals to help you build resilient cities and towns. Attend the&nbsp;<Link href="/events/e3" >September-October </Link>&bnsp;Workshops to learn more about the ecological risks your city or hometown faces and why it is important to go beyond the SDGs to tackle climate change and inequality.</p>
      
            <button className="btn">     
            <Image 
              src="/images/CMP.png"
              height={300}
              width={400}
              alt="https://interactive-atlas.ipcc.ch/"
            />
            <h4>Precipitation</h4>
            <p>as a Climate Risk.</p>
          </button>



        <button className="btn">      
            <Image 
              src="/images/CMT.png"
              height={300}
              width={400}
              alt="https://interactive-atlas.ipcc.ch/"
            />
            <h4>Temperature</h4>
            <p>as a Climate Risk.</p>
        </button>

      <p><Link href="/events/e11" >November </Link>&nbsp;is data science time, you will need to complete four surveys to learn about the social foundations and planetary boundaries of the city or village you have chosen to work on. And model how we can tackle climate change and reduce inequalities in our communities by using biometrics to create a sustainable urban environment.</p>
           <button className="btn">      <a href="https://www.ecologyandsociety.org/vol14/iss2/art32/" target="_blank"
            className="card">
            <Image 
              src="/images/PB.png"
              height={300}
              width={400}
              alt="A good life for all within planetary boundaries"
            />
            <h4>Ecology & Society</h4>
          </a></button>

          <button className="btn">      
            <Image 
              src="/images/CDS.png"
              height={300}
              width={400}
              alt="Model A good life for all within planetary boundaries"
            />
            <h4>Data Science</h4>
           </button>
      
      <p>In&nbsp;<Link href="/events/e15">December</Link>&nbsp;we'll be talking about stakeholder engagement and storytelling, to get your point across and rolled-out. In the final series of workshops, we'll show you how to replicate this Github project and use this Next.js website as a template for your own eco-city project.</p>
          <button className="btn">    
            <Image 
              src="/images/BWT.png"
              height={300}
              width={400}
              alt="Two different versions of environmentalism"
            />
            <h4>Green Ceiling</h4>
            <p>reduce inequalities in environmental movements.</p>
          </button>
      <p>The workshops will guide you on how to set up and get an ArcGIS Online and Github account, which will enable you to collaborate by participating in workshops. You can also contribute to the <Link href="/events/e19">development of the website</Link>&nbsp; for example by translating the eco-city model into a language other than French or English. </p>

      <h3><Link  href="/events">Workshops Themes</Link></h3>

 

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
