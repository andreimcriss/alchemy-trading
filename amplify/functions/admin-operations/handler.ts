import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { CognitoIdentityProviderClient, AdminAddUserToGroupCommand, AdminRemoveUserFromGroupCommand, ListUsersCommand, AdminCreateUserCommand, AdminSetUserPasswordCommand, MessageActionType } from '@aws-sdk/client-cognito-identity-provider'

const cognitoClient = new CognitoIdentityProviderClient({ region: process.env.REGION })

interface User {
	username: string
	email: string
	groups: string[]
	status: string
	createdAt: string
}

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
	const headers = {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': 'Content-Type,Authorization',
		'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
		'Content-Type': 'application/json',
	}

	if (event.httpMethod === 'OPTIONS') {
		return {
			statusCode: 200,
			headers,
			body: JSON.stringify({ message: 'CORS preflight' }),
		}
	}

	try {
		const { action, username, group, userData } = JSON.parse(event.body || '{}')

		switch (action) {
			case 'listUsers':
				return await listUsers(headers)
			
			case 'addUserToGroup':
				return await addUserToGroup(username, group, headers)
			
			case 'removeUserFromGroup':
				return await removeUserFromGroup(username, group, headers)
			
			case 'createUser':
				return await createUser(userData, headers)
			
			default:
				return {
					statusCode: 400,
					headers,
					body: JSON.stringify({ error: 'Invalid action' }),
				}
		}
	} catch (error) {
		console.error('Error in admin operations:', error)
		return {
			statusCode: 500,
			headers,
			body: JSON.stringify({ error: 'Internal server error' }),
		}
	}
}

async function listUsers(headers: Record<string, string>): Promise<APIGatewayProxyResult> {
	try {
		const command = new ListUsersCommand({
			UserPoolId: process.env.USER_POOL_ID,
		})

		const response = await cognitoClient.send(command)
		
		const users: User[] = response.Users?.map(user => ({
			username: user.Username || '',
			email: user.Attributes?.find(attr => attr.Name === 'email')?.Value || '',
			groups: [], // Groups would need to be fetched separately
			status: user.UserStatus || '',
			createdAt: user.UserCreateDate?.toISOString() || '',
		})) || []

		return {
			statusCode: 200,
			headers,
			body: JSON.stringify({ users }),
		}
	} catch (error) {
		console.error('Error listing users:', error)
		return {
			statusCode: 500,
			headers,
			body: JSON.stringify({ error: 'Failed to list users' }),
		}
	}
}

async function addUserToGroup(username: string, group: string, headers: Record<string, string>): Promise<APIGatewayProxyResult> {
	try {
		const command = new AdminAddUserToGroupCommand({
			UserPoolId: process.env.USER_POOL_ID,
			Username: username,
			GroupName: group,
		})

		await cognitoClient.send(command)

		return {
			statusCode: 200,
			headers,
			body: JSON.stringify({ message: 'User added to group successfully' }),
		}
	} catch (error) {
		console.error('Error adding user to group:', error)
		return {
			statusCode: 500,
			headers,
			body: JSON.stringify({ error: 'Failed to add user to group' }),
		}
	}
}

async function removeUserFromGroup(username: string, group: string, headers: Record<string, string>): Promise<APIGatewayProxyResult> {
	try {
		const command = new AdminRemoveUserFromGroupCommand({
			UserPoolId: process.env.USER_POOL_ID,
			Username: username,
			GroupName: group,
		})

		await cognitoClient.send(command)

		return {
			statusCode: 200,
			headers,
			body: JSON.stringify({ message: 'User removed from group successfully' }),
		}
	} catch (error) {
		console.error('Error removing user from group:', error)
		return {
			statusCode: 500,
			headers,
			body: JSON.stringify({ error: 'Failed to remove user from group' }),
		}
	}
}

async function createUser(userData: any, headers: Record<string, string>): Promise<APIGatewayProxyResult> {
	try {
		const createCommand = new AdminCreateUserCommand({
			UserPoolId: process.env.USER_POOL_ID,
			Username: userData.username,
			UserAttributes: [
				{ Name: 'email', Value: userData.email },
				{ Name: 'given_name', Value: userData.firstName },
				{ Name: 'family_name', Value: userData.lastName },
			],
			TemporaryPassword: userData.temporaryPassword || 'TempPass123!',
			MessageAction: MessageActionType.RESEND,
		})

		await cognitoClient.send(createCommand)

		// If a permanent password is provided, set it
		if (userData.permanentPassword) {
			const setPasswordCommand = new AdminSetUserPasswordCommand({
				UserPoolId: process.env.USER_POOL_ID,
				Username: userData.username,
				Password: userData.permanentPassword,
				Permanent: true,
			})

			await cognitoClient.send(setPasswordCommand)
		}

		return {
			statusCode: 200,
			headers,
			body: JSON.stringify({ message: 'User created successfully' }),
		}
	} catch (error) {
		console.error('Error creating user:', error)
		return {
			statusCode: 500,
			headers,
			body: JSON.stringify({ error: 'Failed to create user' }),
		}
	}
}
