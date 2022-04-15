import {
	Grid,
	Typography,
	Avatar,
	useTheme,
	Tooltip,
	Button
} from '@mui/material';
import { useAuth } from 'src/hooks/useAuth';
import { format } from 'date-fns';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';

function PageHeader({ collection }) {
	const theme = useTheme();
	const details = collection.collection.primary_asset_contracts[0];
	const [hoverLabel, setHoverLabel] = useState('Address');

	return (
		<Grid container alignItems="center">
			<Grid item>
				<Avatar
					sx={{
						mr: 2,
						width: theme.spacing(8),
						height: theme.spacing(8)
					}}
					// variant="rounded"
					alt={details.name}
					src={details.image_url}
				/>
			</Grid>
			<Grid item>
				<Typography variant="h3" component="h3" gutterBottom>
					{details.name}
				</Typography>
				<Typography
					variant="subtitle1"
					gutterBottom
					sx={{ textOverflow: 'ellipsis' }}
				>
					{details.description}
				</Typography>
				<CopyToClipboard
					text={details.address}
					onCopy={() => {
						setHoverLabel('Copied!');
						setTimeout(() => {
							setHoverLabel('Address');
						}, 1000);
					}}
				>
					<Tooltip arrow title={hoverLabel}>
						<Button
							variant="outlined"
							sx={{ mr: 1 }}
							color="primary"
						>
							{details.address.slice(0, 5) +
								'...' +
								details.address.slice(-5, -1)}
						</Button>
					</Tooltip>
				</CopyToClipboard>
			</Grid>
		</Grid>
	);
}

export default PageHeader;
