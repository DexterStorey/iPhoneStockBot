import {Metadata} from 'next'
import {experimental_useFormStatus as useFormStatus} from 'react-dom'
import {DEFAULT_META} from '../constants/metadata'

export const metadata: Metadata = {
	...DEFAULT_META
}

async function subscribe(formData: FormData) {
	'use server'

	const phoneNumber = formData.get('phone-number')
	const model = formData.get('model')
	const zip = formData.get('zip')
	// ...
}

function Form() {
	'use client'

	const {pending} = useFormStatus()

	return (
		<>
			{!pending ? (
				<form
					action={subscribe}
					className='flex flex-col gap-5 p-5'>
					<div className='flex flex-col gap-5 md:flex-row'>
						<input
							className='rounded-md border p-2'
							name='phone-number'
							placeholder='Phone Number'
							type='tel'
						/>
						<input
							className='rounded-md border p-2'
							name='zip'
							placeholder='Zip Code'
							type='zip'
						/>
						{/* minimalist styled select with tw */}
						<select
							className='appearance-none rounded-md border p-2'
							name='model'>
							<option value={'iphone-15-pro-max_black_128gb'}>
								iPhone 15 Pro Max Black 128 GB
							</option>
							<option value={'iphone-15-pro-max_black_128gb'}>
								iPhone 15 Pro Max Black 256 GB
							</option>
						</select>
					</div>
					<button className='rounded-md p-2'>Submit</button>
				</form>
			) : (
				<p className='text-center'>Sending...</p>
			)}
		</>
	)
}

export default async function Home() {
	return (
		<div className='flex min-h-screen flex-col'>
			{/* Section: Hero */}
			<div className='flex flex-grow flex-col items-center justify-center gap-3'>
				<h1>iPhone Stock Bot</h1>
				<Form />
			</div>
			<div className='justify-bottom gap-3 pb-5 text-center'>
				This project was bootstrapped with{' '}
				<a href='https://github.com/RubricLab/rubric/tree/main/packages/create-rubric-app'>
					create-rubric-app
				</a>
			</div>
		</div>
	)
}

async function subscribe(formData: FormData) {
	'use server'

	const phoneNumber = formData.get('phone-number')
	// ...
}

function Form() {
	'use client'

	const {pending} = useFormStatus()

	return (
		<>
			{!pending ? (
				<form action={subscribe}>
					<input
						name='phone-number'
						type='tel'
					/>
					<input
						type='submit'
						value='Submit'
					/>
				</form>
			) : (
				<p>Sending...</p>
			)}
		</>
	)
}

export default async function Page() {
	return <Form />
}
