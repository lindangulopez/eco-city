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

    <button className="btn">      <a href="https://arcg.is/4r5yb" target="_blank"
            className="card">
            <Image 
              src="/images/GL4A.png"
              height={900}
              width={1400}
              alt="Geo-Data for Explore & Collaborate"
            />
            <p>Mapping a good life for all within planetary boundaries.</p>
          </a></button>
     

      <h2><Link href="blog/explore">Explore</Link>
      </h2>
      <p>This platform host a set of resources for ArcGIS Sustainability Professionals to help you build resilient cities and towns. Attend the September-October workshops to learn more about the ecological risks your city or hometown faces and why it is important to go beyond the SDGs to tackle climate change and inequality.</p>
      <p>November is data science time, you will need to complete four surveys to learn about the social foundations and planetary boundaries of the city or village you have chosen to work on. And model how we can tackle climate change and reduce inequalities in our communities by using biometrics to create a sustainable urban environment.</p>
      <p>In December we'll be talking about stakeholder engagement and storytelling, to get your point across and rolled-out. In the final series of workshops, we'll show you how to replicate this Github project and use this Next.js website as a template for your own eco-city project.</p>
      
      <h2><Link href="blog/collaborate">Collaborate</Link></h2>

       <h3>An Open Source and Creative Commons Initiative </h3>
       <h3>to Build Resilient Cities & Villages.</h3>

          <button className="btn">      <a href="https://sdgs.un.org/2030agenda" target="_blank"
            className="card">
            <Image 
              src="/images/SDG10-EN.png"
              height={400}
              width={400}
              alt="SDG Goal 10. Reduce inequality within and among countries"
            />
            <h3>Reduce inequality</h3>
            <p>within and among countries.</p>
          </a></button>
          
          <button className="btn">      <a href="https://sdgs.un.org/2030agenda" target="_blank"
            className="card">
            <Image 
              src="/images/SDG11-EN.png"
              height={400}
              width={400}
              alt="SDG Goal 11. Make cities and human settlements inclusive, safe, resilient and sustainable"
            />
            <h3>Make cities</h3>
            <p>and human settlements inclusive,</p>
            <p>safe, resilient and sustainable</p> 
          </a></button>

            <button className="btn">      <a href="https://sdgs.un.org/2030agenda" target="_blank"
            className="card">
            <Image 
              src="/images/SDG13-EN.png"
              height={400}
              width={400}
              alt="SDG Goal 13. Take urgent action to combat climate change and its impacts"
            />
            <h3>Take urgent action</h3>
            <p>to combat climate change and its impacts.</p>
          </a></button>
     <br></br>
      <p>Contributors are people who have completed the workshops, and are willing to write an article for the blog on their eco-city project. Contributors will also have created an ArcGIS Story Map and added data to the “Mapping a good life for all within planetary boundaries.” web map.</p>
      <p>The ideal collaborator will be a sustainability professional who is also an ArcGIS and Next.js developer. You must also have an ArcGIS Online and Github account. If you are short on skills or resources, you can take the workshops to get started and then ask to collaborate on the next series of events.</p>
      <p>You can collaborate by organizing workshops or contributing to the development of the website, for example by translating the eco-city model into a language other than French or English. </p>

      <h3><Link  href="/events">Workshops Themes</Link></h3>

          <button className="btn">      <a href="https://interactive-atlas.ipcc.ch/" target="_blank"
            className="card">
            <Image 
              src="/images/CMP.png"
              height={300}
              width={400}
              alt=""
            />
            <h4>Climate Risk</h4>
            <p>Temperature</p>
          </a></button>

            <button className="btn">      <a href="https://grist.org/climate-energy/are-there-two-different-versions-of-environmentalism-one-white-one-black/" target="_blank"
            className="card">
            <Image 
              src="/images/BWT.png"
              height={300}
              width={400}
              alt="Two different versions of environmentalism"
            />
            <h4>Green Ceiling</h4>
            <p>reduce inequalities in environmental movements.</p>
          </a></button>

            <button className="btn">      <a href="https://interactive-atlas.ipcc.ch/" target="_blank"
            className="card">
            <Image 
              src="/images/CMT.png"
              height={300}
              width={400}
              alt=""
            />
            <h4>Climate Risk </h4>
            <p>Precipitation.</p>
          </a></button>

            <button className="btn">      <a href="https://www.ecologyandsociety.org/vol14/iss2/art32/" target="_blank"
            className="card">
            <Image 
              src="/images/PB.png"
              height={300}
              width={400}
              alt="A good life for all within planetary boundaries"
            />
            <h4>Ecology and Society</h4>
          </a></button>

            <button className="btn">      <a href="https://github.com/users/lindangulopez/projects/10" target="_blank"
            className="card">
            <Image 
              src="/images/ECO.png"
              height={300}
              width={400}
              alt=""
            />
            <h4>Explore & Collaborate</h4>
          </a></button>

            <button className="btn">      <a href="https://codepen.io/lindangulopez/pen/WNOeryg" target="_blank"
            className="card">
            <Image 
              src="/images/CDS.png"
              height={300}
              width={400}
              alt="Model A good life for all within planetary boundaries"
            />
            <h4>Data Science</h4>
          </a></button>

                    <button className="btn">      <a href="https://arcg.is/4r5yb" target="_blank"
            className="card">
            <Image 
              src="/images/SLE.png"
              height={300}
              width={400}
              alt="Life Expectanct: https://www.socialprogressindex.com/"
            />
            <h4>A Good Life</h4>
            </a></button>

            <button className="btn">      <a href="https://lindangulopez.github.io/sustainable-development/" target="_blank"
            className="card">
            <Image 
              src="/images/SAW.jpg"
              height={300}
              width={400}
              alt="Beyond the Sustainable Development Goals (SDGs) : Addressing Sustainability and Development "
            />
            <h4>Climate Action Plans</h4>
            </a></button>

            <button className="btn">      <a href="https://arcg.is/4r5yb" target="_blank"
            className="card">
            <Image 
              src="/images/SPB.png"
              height={300}
              width={400}
              alt="Biodiversity: https://www.socialprogressindex.com/"
            />
           <h4>For All</h4>
           </a></button>
   </div>

    <div>
   
    <div className="container center">
    <a href="https://groups.google.com/g/explore-collaborate" target="_blank" className="card">

      <h4><Link  href="/events"> To strengthen your skills in sustainable development and development,
          data science, story telling with story maps and eco web development.</Link></h4>
              <h3>
    {/* Plan B
    <ul>
      {products.map((product) => (
      <li key={product.id} className ="center"><button className="btn"><Link href={`/products/${product.id}`}>{product.title}</Link></button></li>
      ))}
      </ul> */}
      Book Workshops </h3></a>
       
      
   
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
