import {
  Box,
  IconButton,
  Badge,
  Tooltip,
  alpha,
  tooltipClasses,
  styled,
  useTheme
} from '@mui/material';
import EventTwoToneIcon from '@mui/icons-material/EventTwoTone';
import PowerSettingsNewTwoToneIcon from '@mui/icons-material/PowerSettingsNewTwoTone';
import SmsTwoToneIcon from '@mui/icons-material/SmsTwoTone';
import Link from 'src/components/Link';
import { useAuth } from 'src/hooks/useAuth';
import { useRouter } from 'next/router';
import { useWeb3React } from '@web3-react/core';
import { injected } from '../../Header/Buttons/WalletConnect/injected';
import { useSnackbar } from 'notistack';

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.colors.alpha.trueWhite[100],
    color: theme.palette.getContrastText(theme.colors.alpha.trueWhite[100]),
    boxShadow: theme.shadows[24],
    fontWeight: 'bold',
    fontSize: theme.typography.pxToRem(12)
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.colors.alpha.trueWhite[100]
  }
}));

function SidebarFooter() {
  const theme = useTheme();
  const { logout } = useAuth();
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const {
    active,
    account,
    library,
    connector,
    provider,
    activate,
    deactivate
  } = useWeb3React();

  const handleLogout = async () => {
    try {
      if (active) {
        console.log('active', active);
        await disconnectWallet();
        console.log('active', active);
      } else {
      }
    } catch (err) {
      console.error(err);
    }
  };

  const disconnectWallet = async () => {
    try {
      await deactivate(injected);
      console.log('active', active);
      return false;
    } catch (e) {
      console.log(e);
      return true;
    }
  };

  return (
    <Box
      sx={{
        height: 60
      }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <LightTooltip placement="top" arrow title={t('Events Calendar')}>
        <IconButton
          sx={{
            background: `${theme.colors.alpha.trueWhite[10]}`,
            color: `${theme.colors.alpha.trueWhite[70]}`,
            transition: `${theme.transitions.create(['all'])}`,

            '&:hover': {
              background: `${alpha(theme.colors.alpha.trueWhite[100], 0.2)}`,
              color: `${theme.colors.alpha.trueWhite[100]}`
            }
          }}
          href="/applications/calendar"
          component={Link}
        >
          <EventTwoToneIcon fontSize="small" />
        </IconButton>
      </LightTooltip>
      <LightTooltip placement="top" arrow title={t('Messenger')}>
        <Badge
          color="success"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          sx={{
            '.MuiBadge-badge': {
              animation: 'pulse 1s infinite',
              top: '5%',
              transition: `${theme.transitions.create(['all'])}`
            }
          }}
          variant="dot"
          overlap="circular"
        >
          <IconButton
            href="/applications/messenger"
            component={Link}
            sx={{
              background: `${theme.colors.alpha.trueWhite[10]}`,
              color: `${theme.colors.alpha.trueWhite[70]}`,
              transition: `${theme.transitions.create(['all'])}`,

              '&:hover': {
                background: `${alpha(theme.colors.alpha.trueWhite[100], 0.2)}`,
                color: `${theme.colors.alpha.trueWhite[100]}`
              },
              mx: 1
            }}
          >
            <SmsTwoToneIcon fontSize="small" />
          </IconButton>
        </Badge>
      </LightTooltip>
      <LightTooltip placement="top" arrow title={t('Logout')}>
        <IconButton
          sx={{
            background: `${theme.colors.alpha.trueWhite[10]}`,
            color: `${theme.colors.alpha.trueWhite[70]}`,
            transition: `${theme.transitions.create(['all'])}`,

            '&:hover': {
              background: `${alpha(theme.colors.alpha.trueWhite[100], 0.2)}`,
              color: `${theme.colors.alpha.trueWhite[100]}`
            }
          }}
          onClick={handleLogout}
        >
          <PowerSettingsNewTwoToneIcon fontSize="small" />
        </IconButton>
      </LightTooltip>
    </Box>
  );
}

export default SidebarFooter;
