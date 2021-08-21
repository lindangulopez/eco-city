import Head from 'next/head';
import Layout from '../components/layout/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
         <meta charset="UTF-8" />
        <title>Explore & Collaborate</title>
        <meta
          name='description'
          content='Climate Action Toolkit for Sustainable Cities & Villages'/>
        <meta name="keywords" content="ArcGIS, Sustainability Professional, Resilience" />
        <meta name="author" content="Linda Angulo Lopez" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
