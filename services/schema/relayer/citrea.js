import { addressType } from '@/constants'

const statusSchema = {
  type: 'object',
  properties: {
    rewardAccount: addressType,
    instances: {
      type: 'object',
      properties: {
        avax: {
          type: 'object',
          properties: {
            instanceAddress: {
              type: 'object',
              properties: {
                '0.001': addressType
              },
              required: ['0.001']
            },
            decimals: { enum: [18] }
          },
          required: ['instanceAddress', 'decimals']
        }
      },
      required: ['cBTC']
    },
    netId: { type: 'integer' },
    tornadoServiceFee: { type: 'number', maximum: 20, minimum: 0 },
    health: {
      type: 'object',
      properties: {
        status: { const: 'true' },
        error: { type: 'string' }
      },
      required: ['status']
    },
    currentQueue: { type: 'number' }
  },
  required: ['rewardAccount', 'instances', 'netId', 'tornadoServiceFee', 'health']
}

export { statusSchema }
