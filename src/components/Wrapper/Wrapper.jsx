import React from 'react';
import { WrapperContainer } from './Wrapper.styled';
import Header from 'components/Header/Header';
import Hero from 'components/Hero/Hero';

export default function Wrapper() {
  return (
    <WrapperContainer>
      <Header
        logo={'antic'}
        products={'Products'}
        rooms={'Rooms'}
        services={'Services'}
        inspirations={'Inspirations'}
      />
      <Hero
        title={'HOME DESIGN'}
        subtitle={'Elegance for Interiors & Exteriors'}
        description={
          'We provide everyone with modern, trendy, quality furniture'
        }
      />
    </WrapperContainer>
  );
}
