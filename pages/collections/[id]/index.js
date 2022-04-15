import Head from 'next/head';

import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import { Authenticated } from 'src/components/Authenticated';
import DashboardCollectionsContent from 'src/content/DashboardPages/collections';
import { wait } from 'src/utils/wait';
import baycCollection from '../../../src/data/baycCollections.json';
import baycListings from '../../../src/data/baycListings.json';

function DashboardCollections({ collection, listings }) {
  const details = collection.collection.primary_asset_contracts[0];
  return (
    <>
      <Head>
        <title>{details.name}</title>
      </Head>
      <DashboardCollectionsContent
        collection={collection}
        listings={listings}
      />
    </>
  );
}

DashboardCollections.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export const getServerSideProps = async (ctx) => {
  try {
    const collectionsRes = await fetch(
      `https://testnets-api.opensea.io/api/v1/collection/${ctx.params.id}?format=json`
    );
    await wait(1000);
    const listingsRes = await fetch(
      `https://testnets-api.opensea.io/api/v1/assets?collection=${ctx.params.id}&format=json&limit=10&offset=0&order_direction=desc`
    );

    const collection = await collectionsRes.json();
    const listings = await listingsRes.json();

    return { props: { collection, listings } };
  } catch (e) {
    const collection = baycCollection;
    const listings = baycListings;

    return { props: { collection, listings } };
  }
};

export default DashboardCollections;
