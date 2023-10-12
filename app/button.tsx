'use client'
import {experimental_useFormStatus as useFormStatus} from 'react-dom'

export default function Button() {
	const {pending} = useFormStatus()

	return (
		<button
			className='rounded-md p-2'
			type='submit'>
			{pending ? 'Submitting...' : 'Submit'}
		</button>
	)
}
