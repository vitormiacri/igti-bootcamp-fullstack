import Account from '../models/account';

class AccountController {
  async deposit(req, res) {
    const { agencia, conta, balance } = req.body;

    if (!agencia || !conta || !balance) {
      return res.status(400).json({ error: 'Parâmetros inválidos' });
    }

    const findAccount = await Account.findOne({ agencia, conta });

    if (!findAccount) {
      return res.status(400).json({ error: 'Agencia ou conta não encontrada' });
    }

    findAccount.balance = findAccount.balance + balance;

    await findAccount.save();

    return res.status(200).json(findAccount);
  }

  async withdraw(req, res) {
    const { agencia, conta, balance } = req.body;

    if (!agencia || !conta || !balance) {
      return res.status(400).json({ error: 'Parâmetros inválidos' });
    }

    const findAccount = await Account.findOne({ agencia, conta });

    if (!findAccount) {
      return res.status(400).json({ error: 'Agencia ou conta não encontrada' });
    }

    let newBalance = findAccount.balance - balance - 1;

    if (newBalance < 0) {
      return res.status(400).json({ error: 'Saldo insuficiente' });
    }

    findAccount.balance = newBalance;

    await findAccount.save();

    return res.status(200).json(findAccount);
  }

  async getBalance(req, res) {
    const { agencia, conta } = req.query;

    if (!agencia || !conta) {
      return res.status(400).json({ error: 'Parâmetros inválidos' });
    }

    const findAccount = await Account.findOne({ agencia, conta });

    if (!findAccount) {
      return res.status(400).json({ error: 'Agencia ou conta não encontrada' });
    }

    return res.status(200).json(findAccount);
  }

  async delete(req, res) {
    const { agencia, conta } = req.body;

    if (!agencia || !conta) {
      return res.status(400).json({ error: 'Parâmetros inválidos' });
    }

    await Account.findOneAndDelete({ agencia, conta });

    const activeAccounts = await Account.find({ agencia });

    return res.status(200).json(activeAccounts);
  }

  async transfer(req, res) {
    const { contaOrigem, contaDestino, valor } = req.body;

    if (!contaOrigem || !contaDestino || !valor) {
      return res.status(400).json({ error: 'Parâmetros inválidos' });
    }
    const findContaOrigem = await Account.findOne({ conta: contaOrigem });
    const findContaDestino = await Account.findOne({ conta: contaDestino });

    if (findContaOrigem.agencia !== findContaDestino.agencia) {
      findContaOrigem.balance -= 8;
    }

    findContaOrigem.balance -= valor;
    findContaDestino.balance += valor;

    await findContaOrigem.save();
    await findContaDestino.save();

    return res.status(200).json(findContaOrigem);
  }

  async avgAgency(req, res) {
    const { agencia } = req.query;

    if (!agencia) {
      return res.status(400).json({ error: 'Parâmetros inválidos' });
    }

    const findAccounts = await Account.aggregate([
      { $match: { agencia: Number(agencia) } },
      { $group: { _id: '$agencia', avgBalance: { $avg: '$balance' } } },
    ]);

    if (findAccounts.length === 0) {
      return res
        .status(200)
        .json({ msg: 'Nenhuma conta encontrada para esta agência' });
    }

    return res.status(200).json(findAccounts);
  }

  async lowestBalances(req, res) {
    const { limit } = req.query;

    if (!limit) {
      return res.status(400).json({ error: 'Parâmetros inválidos' });
    }

    const findAccounts = await Account.aggregate([
      { $sort: { balance: 1 } },
    ]).limit(Number(limit));

    return res.status(200).json(findAccounts);
  }

  async topBalances(req, res) {
    const { limit } = req.query;

    if (!limit) {
      return res.status(400).json({ error: 'Parâmetros inválidos' });
    }

    const findAccounts = await Account.aggregate([
      { $sort: { balance: -1 } },
    ]).limit(Number(limit));

    return res.status(200).json(findAccounts);
  }

  async transferTopBalances(req, res) {
    const findAgencies = await Account.distinct('agencia');
    let vipAccounts = [];

    for (const agency of findAgencies) {
      const findTopAccount = await Account.find({ agencia: agency })
        .sort({ balance: -1 })
        .limit(1);

      const { name, balance, conta } = findTopAccount[0];

      const accountExist = await Account.findOne({
        agencia: 99,
        conta: Number(conta),
      });

      if (!accountExist) {
        vipAccounts.push({
          agencia: 99,
          name,
          balance,
          conta,
        });
      }
    }

    if (vipAccounts.length > 0) {
      await Account.insertMany(vipAccounts);
    }

    const findPrivateAgency = await Account.find({ agencia: 99 });

    return res.status(200).json(findPrivateAgency);
  }
}

export default new AccountController();
