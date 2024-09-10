import React from 'react';
import {
  HeaderContainer,
  HeaderLinkIcon,
  HeaderLogo,
  HeaderNav,
  HeaderNavLink,
  HeaderNavList,
  HeaderNavListItem,
} from './Header.styled';

export default function Header({
  logo,
  products,
  rooms,
  services,
  inspirations,
}) {
  return (
    <HeaderContainer>
      <HeaderLogo>{logo}</HeaderLogo>
      <HeaderNav>
        <HeaderNavList>
          <HeaderNavListItem>
            <HeaderNavLink href="#">{products}</HeaderNavLink>
          </HeaderNavListItem>
          <HeaderNavListItem>
            <HeaderNavLink href="#">{rooms}</HeaderNavLink>
          </HeaderNavListItem>
          <HeaderNavListItem>
            <HeaderNavLink href="#">{services}</HeaderNavLink>
          </HeaderNavListItem>
          <HeaderNavListItem>
            <HeaderNavLink href="#">{inspirations}</HeaderNavLink>
          </HeaderNavListItem>
        </HeaderNavList>
        <HeaderLinkIcon />
      </HeaderNav>
    </HeaderContainer>
  );
}
