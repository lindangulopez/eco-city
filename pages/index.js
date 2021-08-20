import path from 'path';
import fs from 'fs/promises';
import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/event-list';

import Link from 'next/link';

function HomePage(props) {
  const { products } = props;

  return (
    <>
    <div>
      <EventList items={props.events} />
    </div>

    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
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
      events: featuredEvents
    },
    revalidate: 1800,
  };
}

export default HomePage;
