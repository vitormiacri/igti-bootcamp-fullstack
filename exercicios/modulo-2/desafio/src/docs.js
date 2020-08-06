export const swaggerDocument = {
  swagger: '2.0',
  info: {
    description:
      'Desenvolvida como proposta de desafio do segundo módulo do IGTI Bootcamp Fullstack. Consiste em gerenciar as grades (notas) dos alunos. O armazenamento dos dados é feito em arquivo json.',
    version: '1.0.0',
    title: 'Grades API',
    contact: {
      email: 'vitao.miacri@gmail.com',
    },
  },
  host: 'localhost:3333',
  basePath: '/',
  tags: [
    {
      name: 'grades',
      description: 'Gerenciamento das grades',
    },
  ],
  schemes: ['http'],
  paths: {
    '/grades': {
      post: {
        tags: ['grades'],
        summary: 'Adiciona uma nova grade',
        description: '',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Objeto do tipo Grade que deve ser inserido',
            required: true,
            schema: {
              $ref: '#/definitions/Grade',
            },
          },
        ],
        responses: {
          '400': {
            description: 'Dados inválidos',
          },
        },
      },
    },
    '/grades/{id}': {
      put: {
        tags: ['grades'],
        summary: 'Atualizar uma grade existente',
        description: '',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'path',
            name: 'id',
            type: 'integer',
            description: 'Id da grade a ser alterada',
            required: true,
          },
          {
            in: 'body',
            name: 'body',
            required: true,
            schema: {
              $ref: '#/definitions/GradeEdit',
            },
          },
        ],
        responses: {
          '400': {
            description: 'Grade não encontrada',
          },
        },
      },
      delete: {
        tags: ['grades'],
        summary: 'Excluir uma grade existente',
        description: '',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'path',
            name: 'id',
            type: 'integer',
            description: 'Id da grade a ser alterada',
            required: true,
          },
          {
            in: 'body',
            name: 'body',
            required: true,
            schema: {
              $ref: '#/definitions/GradeEdit',
            },
          },
        ],
        responses: {
          '400': {
            description: 'Grade não encontrada',
          },
        },
      },
      get: {
        tags: ['grades'],
        summary: 'Procura uma grade pelo ID',
        produces: ['application/json'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Id da grade a ser pesquisada',
            required: true,
            type: 'integer',
          },
        ],
        responses: {
          '200': {
            description: '',
            schema: {
              $ref: '#/definitions/Grade',
            },
          },
          '400': {
            description: 'Grade não encontrada',
          },
        },
      },
    },
    '/total-grades': {
      get: {
        tags: ['grades'],
        summary: 'Retorna o total das notas',
        description:
          'Retorna o total da soma dos valores das grades, de acordo com o filtro passado',
        produces: ['application/json'],
        parameters: [
          {
            name: 'student',
            in: 'query',
            description: 'O nome do estudante',
            required: true,
            type: 'string',
          },
          {
            name: 'subject',
            in: 'query',
            description: 'O nome do curso',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          '200': {
            description: '',
            schema: {
              $ref: '#/definitions/TotalGrade',
            },
          },
          '400': {
            description: 'Nenhuma Grade não encontrada',
          },
        },
      },
    },
    '/avg-grades': {
      get: {
        tags: ['grades'],
        summary: 'Retorna a média das grades',
        description:
          'Retorna a média dos valores das grades, de acordo com o filtro passado',
        produces: ['application/json'],
        parameters: [
          {
            name: 'type',
            in: 'query',
            description: 'O tipo de conteúdo',
            required: true,
            type: 'string',
          },
          {
            name: 'subject',
            in: 'query',
            description: 'O nome do curso',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          '200': {
            description: '',
            schema: {
              $ref: '#/definitions/AvgGrade',
            },
          },
          '400': {
            description: 'Nenhuma Grade não encontrada',
          },
        },
      },
    },
    '/best-grades': {
      get: {
        tags: ['grades'],
        summary: 'Retorna as três melhores grades',
        description:
          'Retorna as três melhores grades, de acordo com o filtro passado',
        produces: ['application/json'],
        parameters: [
          {
            name: 'type',
            in: 'query',
            description: 'O tipo de conteúdo',
            required: true,
            type: 'string',
          },
          {
            name: 'subject',
            in: 'query',
            description: 'O nome do curso',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          '200': {
            description: '',
            schema: {
              items: {
                $ref: '#/definitions/Grade',
              },
            },
          },
          '400': {
            description: 'Nenhuma Grade não encontrada',
          },
        },
      },
    },
  },
  definitions: {
    Grade: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          format: 'int64',
        },
        student: {
          type: 'string',
          description: 'Nome do estudante',
        },
        subject: {
          type: 'string',
          description: 'Nome do curso',
        },
        type: {
          type: 'string',
          description: 'Tipo do conteúdo',
        },
        value: {
          type: 'integer',
          format: 'int64',
        },
        timestamp: {
          type: 'string',
          format: 'date-time',
        },
      },
    },
    GradeEdit: {
      type: 'object',
      properties: {
        student: {
          type: 'string',
          description: 'Nome do estudante',
        },
        subject: {
          type: 'string',
          description: 'Nome do curso',
        },
        type: {
          type: 'string',
          description: 'Tipo do conteúdo',
        },
        value: {
          type: 'integer',
          format: 'int64',
        },
        timestamp: {
          type: 'string',
          format: 'date-time',
        },
      },
    },
    TotalGrade: {
      type: 'object',
      properties: {
        student: {
          type: 'string',
          description: 'Nome do estudante',
        },
        subject: {
          type: 'string',
          description: 'Nome do curso',
        },
        totalGrade: {
          type: 'integer',
          format: 'int64',
        },
      },
    },
    AvgGrade: {
      type: 'object',
      properties: {
        type: {
          type: 'string',
          description: 'Tipo do conteúdo',
        },
        subject: {
          type: 'string',
          description: 'Nome do curso',
        },
        avg: {
          type: 'number',
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
