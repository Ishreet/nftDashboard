import { useState } from 'react';
import {
	Card,
	CardContent,
	CardHeader,
	Typography,
	Divider,
	Button,
	Tabs,
	Tab,
	Avatar,
	Box,
	styled,
	useTheme
} from '@mui/material';
import { Chart } from 'src/components/Chart';

import HourglassTopTwoToneIcon from '@mui/icons-material/HourglassTopTwoTone';
import AdminPanelSettingsTwoToneIcon from '@mui/icons-material/AdminPanelSettingsTwoTone';
import VpnLockTwoToneIcon from '@mui/icons-material/VpnLockTwoTone';
import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone';
import { DateTimePicker } from 'formik-mui-lab';

const TabsContainerWrapper = styled(CardContent)(
	({ theme }) => `
      background-color: ${theme.colors.alpha.black[5]};
`
);

const AvatarPending = styled(Avatar)(
	({ theme }) => `
      background-color: ${theme.colors.warning.lighter};
      color: ${theme.colors.warning.main};
      width: ${theme.spacing(10)};
      height: ${theme.spacing(10)};
      margin: 0 auto ${theme.spacing(2)};

      .MuiSvgIcon-root {
        font-size: ${theme.typography.pxToRem(42)};
      }
`
);

const AvatarError = styled(Avatar)(
	({ theme }) => `
      background-color: ${theme.colors.error.lighter};
      color: ${theme.colors.error.main};
      width: ${theme.spacing(10)};
      height: ${theme.spacing(10)};
      margin: 0 auto ${theme.spacing(2)};

      .MuiSvgIcon-root {
        font-size: ${theme.typography.pxToRem(42)};
      }
`
);

const randomDate = (start, end) => {
	return new Date(
		start.getTime() +
			Math.random() * (end.getTime() - start.getTime())
	);
};

const generateDayWiseTimeSeries = (baseval, count, yrange) => {
	let i = 0;
	const series = [];
	while (i < count) {
		const y =
			Math.floor(
				Math.random() * (yrange.max - yrange.min + 1)
			) +
			yrange.min +
			1;
		const date = randomDate(new Date(baseval), new Date());
		series.push([date, y]);
		i++;
	}
	return series;
};

function Activity() {
	const theme = useTheme();

	const [currentTab, setCurrentTab] = useState('daily');

	const tabs = [
		{ value: 'daily', label: 'Daily' },
		{ value: 'weekly', label: 'Weekly' },
		{ value: 'monthly', label: 'Monthly' }
	];

	const handleTabsChange = (_event, value) => {
		setCurrentTab(value);
	};

	const chartOptions = {
		chart: {
			background: 'transparent',
			toolbar: {
				show: false
			},
			type: 'scatter'
		},
		stroke: {
			curve: 'smooth',
			width: [3, 3],
			dashArray: [0, 5],
			colors: [
				theme.colors.error.main,
				theme.colors.primary.main
			]
		},
		fill: {
			opacity: [1, 0.2]
		},
		theme: {
			mode: theme.palette.mode
		},
		markers: {
			hover: {
				sizeOffset: 5
			},
			shape: 'circle',
			size: 7,
			strokeWidth: 2,
			strokeOpacity: 1,
			strokeColors: theme.colors.alpha.white[100],
			colors: [
				theme.colors.error.main,
				theme.colors.primary.main
			]
		},
		colors: [theme.colors.error.main, theme.colors.primary.main],

		dataLabels: {
			enabled: false
		},
		legend: {
			labels: {
				useSeriesColors: true
			},
			itemMargin: {
				horizontal: 15,
				vertical: 15
			},
			show: true
		},
		xaxis: {
			type: 'datetime',
			title: 'Time',
			axisBorder: {
				show: false
			},
			labels: {
				show: true
			}
		},
		yaxis: {
			title: 'Price (ETH)',
			show: true,
			labels: {
				show: true
			}
		},
		grid: {
			xaxis: {
				lines: {
					show: true
				}
			},
			yaxis: {
				lines: {
					show: true
				}
			},
			strokeDashArray: 5,
			borderColor: theme.colors.alpha.black[10]
		}
	};

	const chartData = (days, count) => {
		return [
			{
				name: 'Price (ETH)',
				data: generateDayWiseTimeSeries(
					new Date().setDate(new Date().getDate() - days),
					count,
					{
						min: 0,
						max: 6
					}
				)
			}
		];
	};

	return (
		<Card
			sx={{
				height: '100%'
			}}
		>
			<CardHeader title={<>Trading History</>} />
			<Divider />
			<TabsContainerWrapper>
				<Tabs
					onChange={handleTabsChange}
					value={currentTab}
					variant="scrollable"
					scrollButtons="auto"
					textColor="primary"
					indicatorColor="primary"
				>
					{tabs.map((tab) => (
						<Tab
							key={tab.value}
							label={tab.label}
							value={tab.value}
						/>
					))}
				</Tabs>
			</TabsContainerWrapper>
			<Divider />
			<Box p={2}>
				{currentTab === 'daily' && (
					<>
						<Chart
							options={chartOptions}
							series={chartData(1, 10)}
							type="scatter"
							height={500}
						/>
					</>
				)}
				{currentTab === 'weekly' && (
					<>
						<Chart
							options={chartOptions}
							series={chartData(7, 20)}
							type="scatter"
							height={500}
						/>
					</>
					// <Box
					// 	sx={{
					// 		py: { xs: 2, md: 6, lg: 8 },
					// 		textAlign: 'center'
					// 	}}
					// >
					// 	<AvatarPending>
					// 		<HourglassTopTwoToneIcon />
					// 	</AvatarPending>
					// 	<Typography variant="h2">
					// 		{t('No reports, yet')}!
					// 	</Typography>
					// 	<Typography
					// 		variant="h4"
					// 		sx={{
					// 			pt: 1,
					// 			pb: 3
					// 		}}
					// 		fontWeight="normal"
					// 		color="text.secondary"
					// 	>
					// 		{t(
					// 			'There is not enough data to generate the weekly report, yet'
					// 		)}
					// 		!
					// 	</Typography>
					// 	<Button
					// 		size="small"
					// 		color="warning"
					// 		variant="outlined"
					// 		startIcon={
					// 			<AdminPanelSettingsTwoToneIcon />
					// 		}
					// 		sx={{
					// 			borderWidth: '2px',
					// 			'&:hover': {
					// 				borderWidth: '2px'
					// 			}
					// 		}}
					// 	>
					// 		{t('Update settings')}
					// 	</Button>
					// </Box>
				)}
				{currentTab === 'monthly' && (
					<>
						<Chart
							options={chartOptions}
							series={chartData(30, 30)}
							type="scatter"
							height={500}
						/>
					</>
					// <Box
					// 	sx={{
					// 		py: { xs: 2, md: 6, lg: 8 },
					// 		textAlign: 'center'
					// 	}}
					// >
					// 	<AvatarError>
					// 		<VpnLockTwoToneIcon />
					// 	</AvatarError>
					// 	<Typography variant="h2">
					// 		{t('Not available')}!
					// 	</Typography>
					// 	<Typography
					// 		variant="h4"
					// 		sx={{
					// 			pt: 1,
					// 			pb: 3
					// 		}}
					// 		fontWeight="normal"
					// 		color="text.secondary"
					// 	>
					// 		{t(
					// 			'Share the share health data, in app settings'
					// 		)}
					// 		!
					// 	</Typography>
					// 	<Button
					// 		size="small"
					// 		color="error"
					// 		variant="outlined"
					// 		startIcon={<VpnKeyTwoToneIcon />}
					// 		sx={{
					// 			borderWidth: '2px',
					// 			'&:hover': {
					// 				borderWidth: '2px'
					// 			}
					// 		}}
					// 	>
					// 		{t('Modify privacy settings')}
					// 	</Button>
					// </Box>
				)}
			</Box>
		</Card>
	);
}

export default Activity;
