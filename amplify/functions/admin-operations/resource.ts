import { defineFunction } from '@aws-amplify/backend'

export const adminOperations = defineFunction({
	name: 'admin-operations',
	entry: './handler.ts',
	runtime: 20,
	timeoutSeconds: 30,
	environment: {
		USER_POOL_ID: '${env.USER_POOL_ID}',
		REGION: '${env.AWS_REGION}',
	},
})
