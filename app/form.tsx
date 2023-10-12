'use client'
import {experimental_useFormStatus as useFormStatus} from 'react-dom'
import subscribe from './subscribe'

export default function Form() {
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
