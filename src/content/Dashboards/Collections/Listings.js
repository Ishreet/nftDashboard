import { forwardRef, useState, Fragment } from 'react';

import {
	Box,
	CardContent,
	ListItemAvatar,
	ListItemText,
	Divider,
	Dialog,
	List,
	Card,
	Grid,
	alpha,
	Button,
	Typography,
	Avatar,
	styled,
	ListItem,
	useTheme,
	Tab,
	Tabs,
	Slide,
	IconButton,
	CardMedia,
	CardHeader
} from '@mui/material';

import Scrollbar from 'src/components/Scrollbar';
import CloseIcon from '@mui/icons-material/Close';

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />;
});

const ListWrapper = styled(List)(
	() => `
      .MuiDivider-root:first-of-type {
          display: none;
      }
    `
);

const ListItemWrapper = styled(ListItem)(
	({ theme }) => `
	&:hover {
			background: ${theme.colors.primary.lighter}
        }
    `
);

const DialogWrapper = styled(Dialog)(
	() => `
      .MuiDialog-container {
          height: auto;
      }

      .MuiDialog-paperScrollPaper {
          max-height: calc(100vh - 64px)
      }
  `
);

const CardActions = styled(Box)(
	({ theme }) => `
      position: absolute;
      right: ${theme.spacing(2)};
      top: ${theme.spacing(2)};
      z-index: 7;
    `
);

const openInNewTab = (url) => {
	const newWindow = window.open(
		url,
		'_blank',
		'noopener,noreferrer'
	);
	if (newWindow) newWindow.opener = null;
};

function Listings({ listings }) {
	const theme = useTheme();
	const data = listings.assets;

	const [currentTab, setCurrentTab] = useState('Price');
	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false);
	const [currNft, setCurrNft] = useState([]);
	const [currTraits, setCurrTraits] = useState([]);

	const tabs = [
		{ value: 'Price', label: 'Price' },
		{ value: 'Rank', label: 'Rank' },
		{ value: 'Recent', label: 'Recent' }
	];

	const getNft = (id) => {
		console.log('id', id);
		const result = data.find((item) => {
			return item.id === id;
		});
		setCurrNft(result);
		setCurrTraits(result.traits);
	};

	const handleTabsChange = (_event, value) => {
		setCurrentTab(value);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Card>
				<Box
					display="flex"
					alignItems="center"
					justifyContent="space-between"
					sx={{
						background: `${theme.colors.alpha.black[5]}`
					}}
					p={2}
				>
					<Box>
						<Typography variant="h4">Listings</Typography>
					</Box>
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
				</Box>
				<Box
					sx={{
						height: 600
					}}
				>
					<Scrollbar>
						<ListWrapper disablePadding>
							{data.map((item, index) => (
								<Fragment key={index}>
									<Divider />
									<ListItemWrapper
										onClick={() => {
											getNft(item.id);
											handleClickOpen();
										}}
										sx={{
											justifyContent: 'center',
											display: {
												xs: 'inline-flex'
											},
											py: 2,
											px: 2.5
										}}
									>
										<ListItemAvatar
											sx={{
												minWidth: 'auto',
												mr: 2,
												mb: { xs: 2, sm: 0 }
											}}
										>
											<Avatar
												sx={{
													width: 42,
													height: 42
												}}
												alt={item.name}
												src={
													item.image_thumbnail_url
												}
											/>
										</ListItemAvatar>
										<ListItemText
											sx={{
												flexGrow: 0,
												maxWidth: '50%',
												flexBasis: '50%'
											}}
											disableTypography
											primary={
												<Typography
													color="text.primary"
													variant="h5"
												>
													{item.name ||
														item.token_id}
												</Typography>
											}
											secondary={
												<>
													<Typography
														noWrap
														variant="subtitle2"
													>
														{item.name}{' '}
														{/* {t('at')}{' '}
														<Link href="#">
															<b>
																{
																	item.name
																}
															</b>
														</Link>
														Rank: N/A */}
													</Typography>
												</>
											}
										/>
										<Box
											pl={0.5}
											display="flex"
											flexGrow={1}
											alignItems="center"
										>
											<Box
												display="flex"
												alignItems="center"
												flex={1}
												sx={{
													width: '100%',
													pr: 1
												}}
											>
												<Typography
													sx={{
														pl: 1
													}}
													fontWeight="bold"
													variant="body1"
													textAlign="right"
												>
													1 Ξ
												</Typography>
											</Box>
											<Button
												size="small"
												variant="text"
												color="primary"
												sx={{
													alignSelf:
														'center',
													fontWeight:
														'normal',
													backgroundColor: `${theme.colors.primary.lighter}`,
													'&:hover': {
														backgroundColor: `${theme.colors.primary.main}`,
														color: `${theme.palette.getContrastText(
															theme
																.colors
																.primary
																.main
														)}`
													}
												}}
											>
												Buy
											</Button>
										</Box>
									</ListItemWrapper>
								</Fragment>
							))}
						</ListWrapper>
					</Scrollbar>
				</Box>
			</Card>

			<DialogWrapper
				open={open}
				TransitionComponent={Transition}
				keepMounted
				maxWidth="sm"
				fullWidth
				scroll="paper"
				onClose={handleClose}
			>
				<Box>
					<Grid container>
						<Card
							sx={{
								position: 'relative',
								width: 1,
								p: 2
							}}
						>
							<CardActions>
								<IconButton
									sx={{
										p: 1,
										borderRadius: 55
									}}
									size="small"
									color="error"
									onClick={handleClose}
								>
									<CloseIcon fontSize="small" />
								</IconButton>
							</CardActions>

							<Avatar
								variant="rounded"
								sx={{
									width: `${theme.spacing(50)}`,
									height: `${theme.spacing(50)}`,
									my: 'auto',
									mx: 'auto',
									transition: `${theme.transitions.create(
										['box-shadow', 'transform']
									)}`,
									transform: 'translateY(0px)',
									boxShadow: `0 0 0 5px ${theme.colors.alpha.white[100]}`,
									'&:hover': {
										transform:
											'translateY(-10px)',
										boxShadow: `0 2rem 8rem 0 ${alpha(
											theme.colors.alpha
												.black[100],
											0.05
										)}, 
											  0 0.6rem 1.6rem ${alpha(theme.colors.alpha.black[100], 0.15)}, 
											  0 0.2rem 0.2rem ${alpha(theme.colors.alpha.black[100], 0.1)}`
									}
								}}
								src={currNft.image_url}
							/>
							<CardContent
								sx={{
									pb: 4,
									textAlign: 'center'
								}}
							>
								<Typography variant="h2">
									{currNft.name || currNft.token_id}
								</Typography>
								<Button
									size="large"
									variant="text"
									color="primary"
									onClick={() =>
										openInNewTab(
											currNft.permalink
										)
									}
									sx={{
										my: 2,
										px: 3,
										alignSelf: 'center',
										fontWeight: 'normal',
										backgroundColor: `${theme.colors.primary.lighter}`,
										'&:hover': {
											backgroundColor: `${theme.colors.primary.main}`,
											color: `${theme.palette.getContrastText(
												theme.colors.primary
													.main
											)}`
										}
									}}
								>
									Buy
								</Button>
								<Card variant="outlined">
									<CardHeader
										sx={{
											p: 2
										}}
										disableTypography
										title={
											<Typography
												variant="h4"
												sx={{
													fontSize: `${theme.typography.pxToRem(
														20
													)}`
												}}
											>
												Traits
											</Typography>
										}
									/>
									<Divider />
									<Box
										sx={{
											height: 300
										}}
									>
										<Scrollbar>
											<List
												sx={{
													py: 0
												}}
											>
												{currTraits.map(
													(
														trait,
														index
													) => (
														<>
															<Fragment
																key={
																	index
																}
															>
																<ListItem
																	sx={{
																		alignItems:
																			'flex-start',
																		p: 2
																	}}
																>
																	<ListItemText
																		primary={
																			<Typography variant="h4">
																				{
																					trait.trait_type
																				}
																			</Typography>
																		}
																		secondary={
																			<Typography
																				noWrap
																				variant="subtitle2"
																			>
																				{
																					trait.trait_count
																				}
																			</Typography>
																		}
																	/>
																	<Box alignSelf="center">
																		<Typography variant="h4">
																			{
																				trait.value
																			}
																		</Typography>
																	</Box>
																</ListItem>
																<Divider />
															</Fragment>
														</>
													)
												)}
											</List>
										</Scrollbar>
									</Box>
								</Card>
							</CardContent>
						</Card>
					</Grid>
				</Box>
			</DialogWrapper>
		</>
	);
}

export default Listings;
