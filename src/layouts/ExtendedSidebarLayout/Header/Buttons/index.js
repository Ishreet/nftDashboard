import { Box } from '@mui/material';
import HeaderNotifications from './Notifications';
import LanguageSwitcher from './LanguageSwitcher';
import WalletConnect from './WalletConnect';
import Chat from './Chat';

function HeaderButtons() {
  return (
    <Box>
      <WalletConnect />
      {/* <HeaderNotifications />
			<LanguageSwitcher />
			<Chat /> */}
    </Box>
  );
}

export default HeaderButtons;
