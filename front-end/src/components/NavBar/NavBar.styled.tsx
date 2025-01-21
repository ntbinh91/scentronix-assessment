'use client';
import { Button, styled } from '@mui/material';
import Image from 'next/image';

export const SubNavBarWrapper = styled('div')(({ theme }) => ({
  background: theme.palette.bgColor,
}));

export const SubNavBarItem = styled(Button)(({ theme }) => ({
  background: 'transparent',
  color: 'var(--color-text)',
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),

  ':hover': {
    color: theme.palette.primary.main,
  },
}));

export const AppLogo = styled(Image)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
}));
