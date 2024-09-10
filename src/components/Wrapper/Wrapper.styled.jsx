import styled from '@emotion/styled';
import picture from '../../images/picture.jpg';

export const WrapperContainer = styled.div`
  background-color: ${p => p.theme.colors.backgroundSectionCreamColor};
  background-image: url(${picture});
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 50% auto;
`;
