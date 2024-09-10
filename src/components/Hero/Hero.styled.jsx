import styled from '@emotion/styled';
import { FaRegArrowAltCircleDown } from 'react-icons/fa';

export const HeroSection = styled.section`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 32px;
`;

export const HeroTitle = styled.h2`
  padding-top: 125px;
  color: ${p => p.theme.colors.accentColor};

  font-size: ${p => p.theme.fontSizes.s}px;
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: 1.43;
  /* 142.857% */
  letter-spacing: 1px;
`;

export const HeroSubtitle = styled.h1`
  margin-top: 50px;

  width: 420px;
  color: ${p => p.theme.colors.accentColor};
  font-family: ${p => p.theme.fonts.heading};
  font-size: 50px;
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: 1.4;
  /* 140% */
  letter-spacing: -0.4px;
`;

export const HeroDescription = styled.p`
  margin-top: 30px;

  width: 420px;
  font-size: 22px;
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: 1.4;
  /* 140% */
`;

export const DownArrow = styled(FaRegArrowAltCircleDown)`
  color: ${p => p.theme.colors.accentColor};
  font-size: 64px;
  margin-top: 48px;
  padding-bottom: 215px;
`;
