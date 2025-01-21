'use client';

import Link from 'next/link';
import React from 'react';
import { NavBarItem } from './NavLink.styled';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';

interface NavLinkProps {
  label: string;
  href: string;
}

function NavLink({ label, href }: NavLinkProps) {
  const pathname = usePathname();
  const segment = useSelectedLayoutSegment();
  const isActive = segment ? href.toString().includes(segment) : pathname === href;

  return (
    <Link href={href}>
      <NavBarItem variant="text" isActive={isActive}>
        {label}
      </NavBarItem>
    </Link>
  );
}

export default NavLink;
