import React, { useState } from 'react';

import { Container, Bars, Results } from './styles';
import { calculateSalaryFrom } from './helpers/salary';
import Input from './components/Input/Input';
import Bar from './components/Bar/Bar';

function App() {
  const [salary, setSalary] = useState(calculateSalaryFrom(3900));

  return (
    <Container>
      <h1>React Salário</h1>
      <Input
        width="100%"
        handleChange={(e) => setSalary(calculateSalaryFrom(e.target.value))}
        label="Salário bruto"
        type="number"
        value={salary.fullSalary}
      ></Input>
      <Results>
        <Input readOnly value={salary.baseINSS} label="Base INSS"></Input>
        <Input
          readOnly
          color="#e67e22"
          value={`${salary.discountINSS} (${salary.percentINSS}%)`}
          label="Desconto INSS"
        ></Input>
        <Input readOnly value={salary.baseIRPF} label="Base IRPF"></Input>
        <Input
          readOnly
          value={`${salary.discountIRPF} (${salary.percentIRPF}%)`}
          color="#c0392b"
          label="Desconto IRPF"
        ></Input>
        <Input
          readOnly
          value={`${salary.netSalary} (${salary.percentNetSalary}%)`}
          color="#16a085"
          label="Salário Líquido INSS"
        ></Input>
      </Results>
      <Bars>
        <Bar width={salary.percentINSS} color="#e67e22"></Bar>
        <Bar width={salary.percentIRPF} color="#c0392b"></Bar>
        <Bar width={salary.percentNetSalary} color="#16a085"></Bar>
      </Bars>
    </Container>
  );
}

export default App;
