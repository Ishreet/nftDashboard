import { useEffect, useRef, useState } from 'react';
import { useAuth } from 'src/hooks/useAuth';

import {
  Avatar,
  Box,
  Button,
  Divider,
  alpha,
  List,
  ListItem,
  ListItemText,
  Popover,
  IconButton,
  Typography,
  Tooltip,
  styled,
  useTheme
} from '@mui/material';

import { useRouter } from 'next/router';

import InboxTwoToneIcon from '@mui/icons-material/InboxTwoTone';
import UnfoldMoreTwoToneIcon from '@mui/icons-material/UnfoldMoreTwoTone';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import { useWeb3React } from '@web3-react/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function SidebarTopSection() {
  const { active, account } = useWeb3React();

  const user = {
    avatar: '/static/images/logo/KapitalLogo.png',
    name: 'Rachael Simons',
    jobtitle: 'Lead Developer'
  };

  const [address, setAddress] = useState('0x0');
  const [hoverLabel, setHoverLabel] = useState('Address');

  useEffect(() => {
    if (active) {
      setAddress(account.slice(0, 5) + '...' + account.slice(-4, -1));
    }
  }, [active, account]);

  return (
    <Box
      sx={{
        textAlign: 'center',
        mx: 1,
        position: 'relative'
      }}
    >
      {/* <img src={user.avatar} height={65} width={215} /> */}
      {/* <CopyToClipboard
				text={account}
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
						{address}
					</Button>
				</Tooltip>
				<Typography
					variant="h4"
					sx={{
						color: `${theme.colors.alpha.trueWhite[100]}`
					}}
				>
					{address}
				</Typography>
			</CopyToClipboard> */}

      {/* <Typography
				variant="subtitle1"
				sx={{
					color: `${theme.colors.alpha.trueWhite[70]}`
				}}
			>
				{balance}
			</Typography> */}
    </Box>
  );
}

export default SidebarTopSection;
