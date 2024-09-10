import React from 'react';
import {
  DownArrow,
  HeroDescription,
  HeroSection,
  HeroSubtitle,
  HeroTitle,
} from './Hero.styled';

export default function Hero({ title, subtitle, description }) {
  return (
    <HeroSection>
      <HeroTitle>{title}</HeroTitle>
      <HeroSubtitle>{subtitle}</HeroSubtitle>
      <HeroDescription>{description}</HeroDescription>
      <DownArrow />
    </HeroSection>
  );
}
