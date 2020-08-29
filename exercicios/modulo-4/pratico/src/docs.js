export const swaggerDocument = {
  swagger: '2.0',
  info: {
    description:
      'Api desenvolvida como proposta do trabalho prático do quarto módulo do IGTI Bootcamp Fullstack. Consiste em gerenciar agências e contas de um banco, com persistência de dados em MongDB.',
    version: '1.0.0',
    title: 'My Bank API',
    contact: {
      email: 'vitao.miacri@gmail.com',
    },
  },
  host: 'localhost:3333',
  basePath: '/',
  tags: [
    {
      name: 'accounts',
      description: 'Gerenciamento das contas',
    },
  ],
  schemes: ['http'],
  paths: {
    '/deposit': {
      post: {
        tags: ['accounts'],
        summary: 'Realiza um depósito na conta informada',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Dados que devem ser enviados para efetuar o depósito',
            required: true,
            schema: {
              $ref: '#/definitions/Deposit',
            },
          },
        ],
        responses: {
          400: {
            description:
              'Parâmentros inválidos ou Agencia e conta não encontradas',
          },
        },
      },
    },
    '/withdraw': {
      post: {
        tags: ['accounts'],
        summary: 'Realiza um saque do valor especificado',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            required: true,
            schema: {
              $ref: '#/definitions/Deposit',
            },
          },
        ],
        responses: {
          400: {
            description:
              'Parâmentros inválidos ou Agencia e conta não encontradas ou Saldo insuficiente',
          },
        },
      },
    },
    '/remove': {
      delete: {
        tags: ['accounts'],
        summary: 'Excluir uma conta existente',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            required: true,
            schema: {
              $ref: '#/definitions/Delete',
            },
          },
        ],
        responses: {
          400: {
            description:
              'Parâmentros inválidos ou Agencia e conta não encontradas',
          },
        },
      },
    },
    '/balance': {
      get: {
        tags: ['accounts'],
        summary: 'Retorna o saldo de conta informada',
        produces: ['application/json'],
        parameters: [
          {
            name: 'agencia',
            in: 'query',
            description: 'Agência da conta',
            required: true,
            type: 'integer',
          },
          {
            name: 'conta',
            in: 'query',
            description: 'Número da conta',
            required: true,
            type: 'integer',
          },
        ],
        responses: {
          200: {
            description: '',
            schema: {
              $ref: '#/definitions/Account',
            },
          },
          400: {
            description:
              'Parâmentros inválidos ou Agencia e conta não encontradas',
          },
        },
      },
    },
    '/transfer': {
      post: {
        tags: ['accounts'],
        summary: 'Realiza uma transferência de saldo entre contas',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            required: true,
            schema: {
              $ref: '#/definitions/Transfer',
            },
          },
        ],
        responses: {
          400: {
            description: 'Parâmentros inválidos',
          },
        },
      },
    },
    '/avg': {
      get: {
        tags: ['accounts'],
        summary:
          'Retorna a média do saldo de todas as contas da agência informada',
        produces: ['application/json'],
        parameters: [
          {
            name: 'agencia',
            in: 'query',
            description: 'O número da agência',
            required: true,
            type: 'number',
          },
        ],
        responses: {
          200: {
            description: '',
            schema: {
              $ref: '#/definitions/Avg',
            },
          },
          400: {
            description: 'Nenhuma Grade não encontrada',
          },
        },
      },
    },
    '/lowest': {
      get: {
        tags: ['accounts'],
        summary: 'Retorna as contas com menores saldos em ordem crescente',
        produces: ['application/json'],
        parameters: [
          {
            name: 'limit',
            in: 'query',
            description: 'A quantidade total de registros para retornar',
            required: true,
            type: 'number',
          },
        ],
        responses: {
          200: {
            description: '',
            schema: {
              $ref: '#/definitions/Account',
            },
          },
          400: {
            description: 'Parâmentros inválidos',
          },
        },
      },
    },
    '/top': {
      get: {
        tags: ['accounts'],
        summary: 'Retorna as contas com menores saldos em ordem crescente',
        produces: ['application/json'],
        parameters: [
          {
            name: 'limit',
            in: 'query',
            description: 'A quantidade total de registros para retornar',
            required: true,
            type: 'number',
          },
        ],
        responses: {
          200: {
            description: '',
            schema: {
              $ref: '#/definitions/Account',
            },
          },
          400: {
            description: 'Parâmentros inválidos',
          },
        },
      },
    },
    '/transferTop': {
      get: {
        tags: ['accounts'],
        summary: 'Transfere as contas com maiores saldos para a agência 99',
        produces: ['application/json'],
        responses: {
          200: {
            description: '',
            schema: {
              $ref: '#/definitions/Account',
            },
          },
          400: {
            description: 'Parâmentros inválidos',
          },
        },
      },
    },
  },
  definitions: {
    Deposit: {
      type: 'object',
      properties: {
        agencia: {
          type: 'integer',
          format: 'int64',
          description: 'Agência do cliente',
        },
        conta: {
          type: 'integer',
          format: 'int64',
          description: 'Número da conta do cliente',
        },
        balance: {
          type: 'integer',
          format: 'int64',
          description: 'Valor do saldo na conta',
        },
      },
    },
    Delete: {
      type: 'object',
      properties: {
        agencia: {
          type: 'integer',
          format: 'int64',
          description: 'Agência do cliente',
        },
        conta: {
          type: 'integer',
          format: 'int64',
          description: 'Número da conta do cliente',
        },
      },
    },
    Account: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          format: 'int64',
        },
        agencia: {
          type: 'integer',
          format: 'int64',
          description: 'Agência do cliente',
        },
        conta: {
          type: 'integer',
          format: 'int64',
          description: 'Número da conta do cliente',
        },
        name: {
          type: 'string',
          description: 'Nome do cliente',
        },
        balance: {
          type: 'integer',
          format: 'int64',
          description: 'Valor do saldo na conta',
        },
      },
    },
    Transfer: {
      type: 'object',
      properties: {
        contaOrigem: {
          type: 'integer',
          format: 'int64',
          description: 'Conta de origem',
        },
        contaDestino: {
          type: 'integer',
          format: 'int64',
          description: 'Conta de destino',
        },
        valor: {
          type: 'integer',
          format: 'int64',
          description: 'Valor da transferência',
        },
      },
    },
    Avg: {
      type: 'object',
      properties: {
        id: {
          type: 'number',
        },
        avgBalance: {
          type: 'number',
          description: 'A média do saldo',
        },
      },
    },
    ApiResponse: {
      type: 'object',
      properties: {
        code: {
          type: 'integer',
          format: 'int32',
        },
        type: {
          type: 'string',
        },
        message: {
          type: 'string',
        },
      },
    },
  },
};
