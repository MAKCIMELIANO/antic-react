import styled from '@emotion/styled';
import { BiMessageRoundedEdit } from 'react-icons/bi';

export const HeaderContainer = styled.header`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 32px;

  padding-top: 55px;
  display: flex;
`;

export const HeaderLogo = styled.span`
  margin-right: 32px;
  padding-top: 11px;
  padding-bottom: 15px;

  color: ${p => p.theme.colors.accentColor};
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l}px;
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: 0.73;
  /* 73.529% */
  letter-spacing: 2px;
`;

export const HeaderNav = styled.nav`
  display: flex;
  width: 100%;
`;

export const HeaderNavList = styled.ul`
  display: flex;
  gap: 24px;
`;

export const HeaderNavListItem = styled.li`
  color: ${p => p.theme.colors.headerLinkColor};

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.38;
`;

export const HeaderNavLink = styled.a`
  display: inline-block;
  padding-top: 15px;
  padding-bottom: 11px;
`;

export const HeaderLinkIcon = styled(BiMessageRoundedEdit)`
  margin-left: auto;
  color: ${p => p.theme.colors.backgroundPageWhiteColor};
  font-size: 64px;
`;
