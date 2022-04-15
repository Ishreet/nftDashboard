import { Box, Stack, Card, Typography, Divider } from '@mui/material';

import Text from 'src/components/Text';
import CountUp from 'react-countup';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PeopleIcon from '@mui/icons-material/People';
import SellIcon from '@mui/icons-material/Sell';
import BarChartIcon from '@mui/icons-material/BarChart';

function CollectionStats({ collection }) {
	const details = collection.collection.stats;
	return (
		<Card>
			<Stack
				direction="row"
				justifyContent="space-evenly"
				alignItems="stretch"
				divider={<Divider orientation="vertical" flexItem />}
				spacing={0}
			>
				<Box
					p={2}
					sx={{
						textAlign: 'center'
					}}
				>
					<Text color="warning">
						<MonetizationOnIcon fontSize="large" />
					</Text>
					<Typography variant="h3">
						<CountUp
							start={0}
							end={details.total_supply}
							delay={1}
							duration={2}
							separator=","
						/>
					</Typography>
					<Typography variant="subtitle2">
						ItemsF
					</Typography>
				</Box>
				<Box
					p={2}
					sx={{
						textAlign: 'center'
					}}
				>
					<Text color="info">
						<PeopleIcon fontSize="large" />
					</Text>
					<Typography variant="h3">
						<CountUp
							start={0}
							end={details.num_owners}
							delay={1}
							duration={2}
							separator=","
						/>
					</Typography>
					<Typography variant="subtitle2">
						Owners
					</Typography>
				</Box>
				<Box
					p={2}
					sx={{
						textAlign: 'center'
					}}
				>
					<Text color="success">
						<SellIcon fontSize="large" />
					</Text>
					<Typography variant="h3">
						<CountUp
							start={0}
							end={details.floor_price}
							delay={1}
							duration={2}
							separator=","
							suffix=" Ξ"
							decimals={1}
						/>
					</Typography>
					<Typography variant="subtitle2">Floor</Typography>
				</Box>
				<Box
					p={2}
					sx={{
						textAlign: 'center'
					}}
				>
					<Text color="primary">
						<BarChartIcon fontSize="large" />
					</Text>
					<Typography variant="h3">
						<CountUp
							start={0}
							end={Math.floor(details.total_volume)}
							delay={1}
							duration={2}
							separator=","
							suffix=" Ξ"
						/>
					</Typography>
					<Typography variant="subtitle2">
						Volume
					</Typography>
				</Box>
			</Stack>
		</Card>
	);
}

export default CollectionStats;
