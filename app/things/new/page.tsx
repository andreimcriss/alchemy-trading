import Navbar from '@/components/Navbar'
import SubmitButton from '@/components/SubmitButton'
import authGetCurrentUserServer from '@/utils/amplifyServertils'
import { AuthUser } from 'aws-amplify/auth'
import { revalidatePath } from 'next/cache'

async function NewThingPage() {
	const user = (await authGetCurrentUserServer()) as AuthUser
	console.log('the user details', user)
	async function createNewThing(formData: FormData) {
		'use server'

		const rawFormData = {
			customerId: formData.get('name'),
		}
		console.log(rawFormData)
		//todo:  mutate data

		// revalidate cache
		revalidatePath('/things')
	}
	return (
		<div>
			<Navbar auth />
			New thing. Probably want to add a reusable form here.
			<form action={createNewThing}>
				<input name="name" type="text" />
				<SubmitButton />
			</form>
		</div>
	)
}

export default NewThingPage
