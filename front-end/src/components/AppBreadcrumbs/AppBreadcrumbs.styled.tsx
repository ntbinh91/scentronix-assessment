'use client';
import { styled, Typography } from '@mui/material';

export const BreadcrumbItem = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.caption.fontSize,
  color: theme.palette.text.primary,
  textTransform: 'uppercase',
  fontWeight: theme.typography.fontWeightBold,
}));
