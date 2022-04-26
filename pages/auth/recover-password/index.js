import { useState, forwardRef, Ref } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
	Box,
	Card,
	TextField,
	Typography,
	Container,
	Alert,
	Slide,
	Dialog,
	Collapse,
	Button,
	Avatar,
	IconButton,
	styled
} from '@mui/material';
import Head from 'next/head';

import BaseLayout from 'src/layouts/BaseLayout';

import { useRefMounted } from 'src/hooks/useRefMounted';
import CloseIcon from '@mui/icons-material/Close';
import { Guest } from 'src/components/Guest';
import Link from 'src/components/Link';
import { useRouter } from 'next/router';

import Logo from 'src/components/LogoSign';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />;
});

const MainContent = styled(Box)(
	() => `
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
);

const DialogWrapper = styled(Dialog)(
	() => `
      .MuiDialog-paper {
        overflow: visible;
      }
`
);

const AvatarSuccess = styled(Avatar)(
	({ theme }) => `
      background-color: ${theme.colors.success.main};
      color: ${theme.palette.success.contrastText};
      width: ${theme.spacing(12)};
      height: ${theme.spacing(12)};
      box-shadow: ${theme.colors.shadows.success};
      top: -${theme.spacing(6)};
      position: absolute;
      left: 50%;
      margin-left: -${theme.spacing(6)};

      .MuiSvgIcon-root {
        font-size: ${theme.typography.pxToRem(45)};
      }
`
);

function RecoverPasswordBasic() {
	const isMountedRef = useRefMounted();
	const router = useRouter();
	const { demo } = router.query;

	const [openAlert, setOpenAlert] = useState(true);

	const [openDialog, setOpenDialog] = useState(false);

	const handleOpenDialog = () => {
		setOpenDialog(true);
	};

	const handleCloseDialog = () => {
		setOpenDialog(false);
	};

	return (
		<>
			<Head>
				<title>Recover Password</title>
			</Head>
			<MainContent>
				<Container maxWidth="sm">
					<Logo />
					<Card
						sx={{
							mt: 3,
							p: 4
						}}
					>
						<Box>
							<Typography
								variant="h2"
								sx={{
									mb: 1
								}}
							>
								{'Recover Password'}
							</Typography>
							<Typography
								variant="h4"
								color="text.secondary"
								fontWeight="normal"
								sx={{
									mb: 3
								}}
							>
								{
									'Enter the email used for registration to reset your password.'
								}
							</Typography>
						</Box>

						<Formik
							initialValues={{
								email: 'demo@example.com',
								submit: null
							}}
							validationSchema={Yup.object().shape({
								email: Yup.string()
									.email(
										'The email provided should be a valid email address'
									)
									.max(255)
									.required(
										'The email field is required'
									)
							})}
							onSubmit={async (
								_values,
								{
									setErrors,
									setStatus,
									setSubmitting
								}
							) => {
								try {
									if (isMountedRef()) {
										setStatus({ success: true });
										setSubmitting(false);
									}
								} catch (err) {
									console.error(err);
									if (isMountedRef()) {
										setStatus({ success: false });
										setErrors({
											submit: err.message
										});
										setSubmitting(false);
									}
								}
							}}
						>
							{({
								errors,
								handleBlur,
								handleChange,
								handleSubmit,
								touched,
								values
							}) => (
								<form
									noValidate
									onSubmit={handleSubmit}
								>
									<TextField
										error={Boolean(
											touched.email &&
												errors.email
										)}
										fullWidth
										helperText={
											touched.email &&
											errors.email
										}
										label={'Email address'}
										margin="normal"
										name="email"
										onBlur={handleBlur}
										onChange={handleChange}
										type="email"
										value={values.email}
										variant="outlined"
									/>

									<Button
										sx={{
											mt: 3
										}}
										color="primary"
										disabled={Boolean(
											touched.email &&
												errors.email
										)}
										onClick={handleOpenDialog}
										type="submit"
										fullWidth
										size="large"
										variant="contained"
									>
										{'Send me a new password'}
									</Button>
								</form>
							)}
						</Formik>
					</Card>
					<Box mt={3} textAlign="right">
						<Typography
							component="span"
							variant="subtitle2"
							color="text.primary"
							fontWeight="bold"
						>
							{'Want to try to sign in again?'}
						</Typography>{' '}
						<Link
							href={
								demo
									? `/auth/login/basic?demo=${demo}`
									: '/auth/login/basic'
							}
						>
							<b>Click here</b>
						</Link>
					</Box>
				</Container>
			</MainContent>

			<DialogWrapper
				open={openDialog}
				maxWidth="sm"
				fullWidth
				TransitionComponent={Transition}
				keepMounted
				onClose={handleCloseDialog}
			>
				<Box
					sx={{
						px: 4,
						pb: 4,
						pt: 10
					}}
				>
					<AvatarSuccess>
						<CheckTwoToneIcon />
					</AvatarSuccess>

					<Collapse in={openAlert}>
						<Alert
							action={
								<IconButton
									aria-label="close"
									color="inherit"
									size="small"
									onClick={() => {
										setOpenAlert(false);
									}}
								>
									<CloseIcon fontSize="inherit" />
								</IconButton>
							}
							severity="info"
						>
							{
								'The password reset instructions have been sent to your email'
							}
						</Alert>
					</Collapse>

					<Typography
						align="center"
						sx={{
							py: 4,
							px: 10
						}}
						variant="h3"
					>
						{'Check your email for further instructions'}
					</Typography>

					<Button
						fullWidth
						component={Link}
						size="large"
						variant="contained"
						onClick={handleCloseDialog}
						href={
							demo
								? `/auth/login/basic?demo=${demo}`
								: '/auth/login/basic'
						}
					>
						{'Continue to login'}
					</Button>
				</Box>
			</DialogWrapper>
		</>
	);
}

RecoverPasswordBasic.getLayout = (page) => (
	<Guest>
		<BaseLayout>{page}</BaseLayout>
	</Guest>
);

export default RecoverPasswordBasic;
