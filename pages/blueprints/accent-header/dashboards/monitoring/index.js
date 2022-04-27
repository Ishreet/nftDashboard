import Head from 'next/head';

import AccentHeaderLayout from 'src/layouts/AccentHeaderLayout';
import { Authenticated } from 'src/components/Authenticated';

import DashboardMonitoringContent from 'src/content/DashboardPages/monitoring';

function DashboardMonitoring() {
	return (
		<>
			<Head>
				<title>Monitoring Dashboard</title>
			</Head>
			<DashboardMonitoringContent />
		</>
	);
}

DashboardMonitoring.getLayout = (page) => (
	<Authenticated>
		<AccentHeaderLayout>{page}</AccentHeaderLayout>
	</Authenticated>
);

export default DashboardMonitoring;
