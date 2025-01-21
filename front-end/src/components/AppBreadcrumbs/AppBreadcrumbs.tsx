import { Breadcrumbs, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { BreadcrumbItem } from './AppBreadcrumbs.styled';

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

interface AppBreadcrumbsProps {
  items: BreadcrumbItem[];
}

function AppBreadcrumbs({ items }: AppBreadcrumbsProps) {
  const breadcrumbs = items.map((item, index) =>
    !!item.href ? (
      <Link key={index} href={item.href || ''}>
        <BreadcrumbItem>{item.label}</BreadcrumbItem>
      </Link>
    ) : (
      <BreadcrumbItem key={index}>{item.label}</BreadcrumbItem>
    ),
  );
  // Add an empty item to the end of the breadcrumbs
  breadcrumbs.push(<BreadcrumbItem key={items.length}></BreadcrumbItem>);

  return (
    <Breadcrumbs
      separator={
        <Typography color="primary.main">
          <NavigateNextIcon fontSize="inherit" />
        </Typography>
      }
    >
      {breadcrumbs}
    </Breadcrumbs>
  );
}

export default AppBreadcrumbs;
