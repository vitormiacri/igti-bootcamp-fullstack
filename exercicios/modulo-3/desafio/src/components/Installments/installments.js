import React from 'react';

import { Container, Installment, Content } from './styles';

function Installments({ data, positive }) {
  return (
    <Container>
      <Installment>{data.id}</Installment>
      <Content positive={positive}>
        <p>{data.formattedAmountMonth}</p>
        <p>{data.formattedInterestMonth}</p>
        <p>{data.percentMonth}</p>
      </Content>
    </Container>
  );
}

export default Installments;
