'use server'

export default async function subscribe(formData: FormData) {
	const phoneNumber = formData.get('phone-number')
	const model = formData.get('model')
	const zip = formData.get('zip')
	// ...
}
