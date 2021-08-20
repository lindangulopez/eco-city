import path from 'path';
import fs from 'fs/promises';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Fragment } from 'react';


function ProductDetailPage(props) {
  const { loadedProduct } = props;

  if (!loadedProduct) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <Fragment>
    <div className="container center">
    <h1 className="title description">
    <a href="https://github.com/users/lindangulopez/projects/10" target="_blank">{loadedProduct.welcome} &rarr; </a>
    </h1>

    <button className="btn">      <a href="https://arcg.is/zarf9" target="_blank"
            className="card">
            <Image 
              src="/images/GL4A.png"
              height={900}
              width={1400}
              alt=""
            />
            <p>{loadedProduct.devis}</p>
          </a></button>    
     
      <h2><Link href="blog/explorer">Explorer</Link></h2>
      <p>{loadedProduct.explore1}</p>
      <p>{loadedProduct.explore2}</p>
      <p>{loadedProduct.explore3}&nbsp;{loadedProduct.explore4}</p>
   
      <h2><Link href="blog/collaborer">Collaborer</Link></h2>
      <h3>{loadedProduct.collaborate1}</h3>
                <button className="btn">      <a href="https://arcg.is/zarf9" target="_blank"
            className="card">
            <Image 
              src="/images/SDG10-FR.png"
              height={400}
              width={400}
              alt=""
            />
            <p>Mapping a good life for all within planetary boundaries.</p>
          </a></button>
          
          <button className="btn">      <a href="https://arcg.is/zarf9" target="_blank"
            className="card">
            <Image 
              src="/images/SDG11-FR.png"
              height={400}
              width={400}
              alt=""
            />
            <p>Mapping a good life for all within planetary boundaries.</p>
          </a></button>

            <button className="btn">      <a href="https://arcg.is/zarf9" target="_blank"
            className="card">
            <Image 
              src="/images/SDG13-FR.png"
              height={400}
              width={400}
              alt=""
            />
            <p>Mapping a good life for all within planetary boundaries.</p>
          </a></button>
      <br></br>    
      <p>{loadedProduct.collaborate2}</p>
      <p>{loadedProduct.collaborate3}</p>
      <p>{loadedProduct.collaborate4}</p>

      <h3><Link  href="/events">Thèmes des Ateliers</Link></h3>
                <button className="btn">      <a href="https://arcg.is/zarf9" target="_blank"
            className="card">
            <Image 
              src="/images/CMP.png"
              height={300}
              width={400}
              alt=""
            />
            <p>Climate Action Plan</p>
          </a></button>

            <button className="btn">      <a href="https://arcg.is/zarf9" target="_blank"
            className="card">
            <Image 
              src="/images/BWT.png"
              height={300}
              width={400}
              alt=""
            />
            <p>Reduce Inequalities.</p>
          </a></button>

            <button className="btn">      <a href="https://arcg.is/zarf9" target="_blank"
            className="card">
            <Image 
              src="/images/CMT.png"
              height={300}
              width={400}
              alt=""
            />
            <p>Climate Action Plan.</p>
          </a></button>

                    <button className="btn">      <a href="https://arcg.is/zarf9" target="_blank"
            className="card">
            <Image 
              src="/images/CMP.png"
              height={300}
              width={400}
              alt=""
            />
            <p>Climate Action Plan</p>
          </a></button>

            <button className="btn">      <a href="https://arcg.is/zarf9" target="_blank"
            className="card">
            <Image 
              src="/images/BWT.png"
              height={300}
              width={400}
              alt=""
            />
            <p>Reduce Inequalities.</p>
          </a></button>

            <button className="btn">      <a href="https://arcg.is/zarf9" target="_blank"
            className="card">
            <Image 
              src="/images/CMT.png"
              height={300}
              width={400}
              alt=""
            />
            <p>Climate Action Plan.</p>
          </a></button>

                    <button className="btn">      <a href="https://arcg.is/zarf9" target="_blank"
            className="card">
            <Image 
              src="/images/CMP.png"
              height={300}
              width={400}
              alt=""
            />
            <p>Climate Action Plan</p>
          </a></button>

            <button className="btn">      <a href="https://arcg.is/zarf9" target="_blank"
            className="card">
            <Image 
              src="/images/SAW.jpg"
              height={300}
              width={400}
              alt=""
            />
            <p>Reduce Inequalities.</p>
          </a></button>

            <button className="btn">      <a href="https://arcg.is/zarf9" target="_blank"
            className="card">
            <Image 
              src="/images/CMT.png"
              height={300}
              width={400}
              alt=""
            />
            <p>Climate Action Plan.</p>
          </a></button>

      <h3><a href="https://groups.google.com/g/explore-collaborate" target="_blank" className="card">{loadedProduct.workshops1}</a></h3>
      <p>{loadedProduct.workshops2}</p>
    </div>
    </Fragment>
    
    </>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.pid;

  const data = await getData();

  const product = data.products.find((product) => product.id === productId);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();

  const ids = data.products.map((product) => product.id);
  const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));

  return {
    paths: pathsWithParams,
    fallback: true,
  };
}

export default ProductDetailPage;
