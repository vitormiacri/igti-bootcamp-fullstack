import React, { useState, useEffect } from 'react';

import { Container, Results, InstallmentsContent } from './styles';
import { formattedInstallments } from './helpers/installments-calculate';
import Input from './components/Input/Input';
import Installments from './components/Installments/installments';

function App() {
  const [amount, setAmount] = useState(1000);
  const [interest, setInterest] = useState(0.5);
  const [period, setPeriod] = useState(1);
  const [installments, setInstallments] = useState(
    formattedInstallments({ amount, interest, period })
  );

  useEffect(() => {
    setInstallments(formattedInstallments({ amount, interest, period }));
  }, [amount, interest, period]);

  return (
    <Container>
      <h1>React - Juros Compostos</h1>
      <Results>
        <Input
          handleChange={(e) => setAmount(e.target.value)}
          label="Capital inicial"
          type="number"
          step={100}
          value={amount}
        ></Input>
        <Input
          handleChange={(e) => setInterest(e.target.value)}
          label="Taxa de juros mensal"
          type="number"
          step={0.01}
          min={-12}
          max={12}
          value={interest}
        ></Input>
        <Input
          handleChange={(e) => setPeriod(e.target.value)}
          label="Período (meses)"
          type="number"
          value={period}
          step={1}
          min={1}
        ></Input>
      </Results>
      <InstallmentsContent>
        {installments.map((installment) => (
          <Installments
            key={installment.id}
            data={installment}
            positive={installment.interestMonth < 0}
          />
        ))}
      </InstallmentsContent>
    </Container>
  );
}

export default App;
