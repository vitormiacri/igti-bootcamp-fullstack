function round(value) {
  return +value.toFixed(2);
}

function format(number) {
  return new Intl.NumberFormat([], {
    style: 'currency',
    currency: 'BRL',
  }).format(number);
}

function calculateInstallments(data) {
  const installments = [];
  const amount = parseFloat(data.amount);
  const interest = parseFloat(data.interest) / 100;
  const period = parseInt(data.period) || 1;

  for (let i = 1; i <= period; i++) {
    const amountMonth = round(amount * Math.pow(1 + interest, i));
    const interestMonth = round(amountMonth - amount);
    const percentMonth = round((interestMonth / amountMonth) * 100);
    installments.push({
      id: i,
      amountMonth,
      interestMonth,
      percentMonth,
    });
  }

  return installments;
}

function formattedInstallments(data) {
  const installments = calculateInstallments(data);
  return installments.map((installment) => ({
    ...installment,
    formattedAmountMonth: format(installment.amountMonth),
    formattedInterestMonth: format(installment.interestMonth),
  }));
}

export { formattedInstallments };
