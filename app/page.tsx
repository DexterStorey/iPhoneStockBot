import {Metadata} from 'next'
import {DEFAULT_META} from '../constants/metadata'
import Form from './form'

export const metadata: Metadata = {
	...DEFAULT_META
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
