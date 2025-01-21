'use client';
import { Button, styled } from '@mui/material';

export const NavBarItem = styled(Button)<{ isActive?: boolean }>(({ theme, isActive }) => ({
  background: 'transparent',
  color: 'var(--color-text)',
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),

  ...(isActive && {
    '::after': {
      content: '""',
      height: '2px',
      backgroundColor: theme.palette.primary.main,
      position: 'absolute',
      width: '100%',
      bottom: theme.spacing(3),
    },
  }),

  ':hover': {
    '::after': {
      content: '""',
      height: '2px',
      backgroundColor: theme.palette.primary.main,
      position: 'absolute',
      width: '100%',
      bottom: theme.spacing(3),
    },
  },
}));
