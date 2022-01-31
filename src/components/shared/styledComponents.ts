import styled from 'styled-components';
import { fontSizes, colors } from '../../themes';

type Props = {
  fontSize?: number;
  textAlign?: string;
  color?: string;
};

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  min-height: 100vh;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

export const BaseTitle = styled.h2<Props>`
  margin: 0;
  text-align: ${({ textAlign }) => textAlign};
  font-family: SFPro Bold;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : fontSizes.xLarge3)}px;
  color: ${({ color }) => (color ? color : colors.black)};
`;
