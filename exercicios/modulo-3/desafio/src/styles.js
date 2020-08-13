import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  max-width: 1080px;
  margin: 10rem auto;

  h1 {
    font-family: 'Roboto', sans-serif;
    letter-spacing: 3px;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 600;
  }
`;

export const Bars = styled.div`
  display: flex;
  margin: 2rem 0;
`;

export const Results = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
