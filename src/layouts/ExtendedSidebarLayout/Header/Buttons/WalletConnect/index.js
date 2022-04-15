import { forwardRef, useEffect, useState } from 'react';
import {
  Box,
  Button,
  CardContent,
  Divider,
  IconButton,
  Grid,
  Tooltip,
  Typography,
  Card,
  Dialog,
  Slide,
  styled,
  useTheme
} from '@mui/material';
import Link from 'src/components/Link';

import CloseIcon from '@mui/icons-material/Close';
import LoadingButton from '@mui/lab/LoadingButton';
const ModelViewer = require('@metamask/logo');
import { injected } from './injected';
import { useWeb3React } from '@web3-react/core';
import Web3 from 'web3';

// import connectWallet from 'src/utils/connectWallet';

const LinkHover = styled(Box)(
  ({ theme }) => `
      display: inline-block;
      transform: scale(1);
      transition: ${theme.transitions.create(['transform'])};

      &:hover {
          transform: scale(1.1);
      }
    `
);

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

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

function WalletConnect() {
  const theme = useTheme();

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [buttonText, setButtonText] = useState('Connect Wallet');
  const [address, setAddress] = useState('');
  const [connectedStatus, setConnectedStatus] = useState('Connect');
  const [connectedStatusSub, setConnectedStatusSub] = useState(
    'Connect with MetaMask'
  );

  const {
    active,
    account,
    library,
    connector,
    provider,
    activate,
    deactivate
  } = useWeb3React();

  const ctx = useWeb3React();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConnect = async () => {
    setLoading(true);
    console.log('active', active);

    if (active) {
      const res = disconnectWallet();
      setLoading(res);
      setOpen(res);
      setConnectedStatus('Connect');
      setConnectedStatusSub('Connect with MetaMask');
      setButtonText('Connect Wallet');
    } else {
      const res = await connectWallet();
      setLoading(res);
      setOpen(res);
      setConnectedStatus('Disconnect');
      setConnectedStatusSub('Disconnect from NFT Dashboard');
    }
  };

  const connectWallet = async () => {
    try {
      await activate(injected);
      return false;
    } catch (e) {
      console.log(e);
      return true;
    }
  };

  const disconnectWallet = () => {
    try {
      deactivate();
      return false;
    } catch (e) {
      console.log(e);
      return true;
    }
  };

  useEffect(() => {
    if (active) {
      console.log('connector', connector);
      console.log('account', account);
      console.log('active', active);
      setButtonText(account.slice(0, 5) + '...' + account.slice(-4));
    } else {
      console.log('ctx', ctx);
    }
  }, [active, account, library]);

  return (
    <>
      <Tooltip arrow title={'Wallet'}>
        <Button
          variant={account ? 'outlined' : 'contained'}
          sx={{ mr: 1 }}
          color="primary"
          onClick={handleClickOpen}
        >
          {buttonText}
        </Button>
      </Tooltip>

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
              <CardContent
                sx={{
                  p: 3,
                  pb: 4,
                  pt: 3,
                  textAlign: 'center'
                }}
              >
                <LinkHover>
                  <Link href="#">
                    <img
                      style={{
                        height: 240
                      }}
                      src="/static/images/logo/MetaMaskLogo.png"
                      alt="..."
                    />
                  </Link>
                </LinkHover>
                <Typography
                  sx={{
                    pt: 2,
                    pb: 2
                  }}
                  variant="h3"
                >
                  {connectedStatusSub}
                </Typography>

                <LoadingButton
                  variant="contained"
                  color="warning"
                  onClick={handleConnect}
                  loading={loading}
                >
                  {connectedStatus}
                </LoadingButton>
              </CardContent>
            </Card>
          </Grid>
        </Box>
        <Divider />
      </DialogWrapper>
    </>
  );
}

export default WalletConnect;
