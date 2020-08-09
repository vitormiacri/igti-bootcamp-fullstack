import styled from 'styled-components';

export const Container = styled.div`
  width: ${(props) => props.width}%;
  background: ${(props) => props.color};
  height: 20px;
`;
