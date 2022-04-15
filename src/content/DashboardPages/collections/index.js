import dynamic from 'next/dynamic';

import PageHeader from 'src/content/Dashboards/Collections/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import Listings from 'src/content/Dashboards/Collections/Listings';
import Trades from 'src/content/Dashboards/Collections/Trades';
import CollectionStats from 'src/content/Dashboards/Collections/CollectionStats';
import Chat from 'src/content/Dashboards/Collections/Chat';
import InfoBlocks from 'src/content/Dashboards/Collections/InfoBlocks';

import Footer from 'src/components/Footer';

import { Grid } from '@mui/material';

import Chart from 'src/content/Dashboards/Collections/Chart';

function DashboardCollectionsContent({ collection, listings }) {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader collection={collection} />
      </PageTitleWrapper>

      <Grid
        sx={{ px: 4 }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={12}>
          <CollectionStats collection={collection} />
        </Grid>
        <Grid item lg={3} xs={12}>
          <Listings listings={listings} />
        </Grid>
        <Grid item lg={6} xs={12}>
          <Chart />
        </Grid>
        <Grid item lg={3} xs={12}>
          <Trades trades={listings} />
        </Grid>
        {/* <Grid item md={8} xs={12}>
					<InfoBlocks />
				</Grid>
				<Grid item md={4} xs={12}>
					<Chat />
				</Grid> */}
      </Grid>

      <Footer />
    </>
  );
}

export default DashboardCollectionsContent;
