import { AppBar, Container, Stack } from '@mui/material';
import React from 'react';
import { AppLogo, SubNavBarItem, SubNavBarWrapper } from './NavBar.styled';
import logoImage from '@/assets/images/logo.png';
import Link from 'next/link';
import NavLink from './NavLink';

const LOGO_WIDTH = 100;
const LOGO_SPACING = 20;

const NAV_ITEMS = [
  { label: 'Shop', href: '/' },
  { label: 'Recipes', href: '/recipes' },
  { label: 'Learn', href: '/learn' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
];

const SUB_NAV_ITEMS = [
  { label: 'Categories', href: '/recipes/categories' },
  { label: 'Collections', href: '/recipes/collections' },
  { label: 'Resources', href: '/recipes/resourcess' },
];

function NavBar() {
  return (
    <AppBar component="nav" elevation={0} color="transparent" position="sticky">
      <Container sx={{ backgroundColor: 'white' }}>
        <Link href="/">
          <AppLogo src={logoImage} alt="logo" width={LOGO_WIDTH} />
        </Link>
        <Stack direction="row" gap={3} paddingLeft={`${LOGO_WIDTH + LOGO_SPACING}px`}>
          {NAV_ITEMS.map((item, index) => (
            <NavLink key={index} label={item.label} href={item.href} />
          ))}
        </Stack>
      </Container>
      <SubNavBarWrapper>
        <Container>
          <Stack direction="row" gap={3} paddingLeft={`${LOGO_WIDTH + LOGO_SPACING}px`}>
            {SUB_NAV_ITEMS.map((item, index) => (
              <SubNavBarItem key={index} variant="text">
                {item.label}
              </SubNavBarItem>
            ))}
          </Stack>
        </Container>
      </SubNavBarWrapper>
    </AppBar>
  );
}

export default NavBar;
