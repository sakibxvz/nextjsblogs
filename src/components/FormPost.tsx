'use client';
import { FormInputPost } from '@/types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
interface FormPostProps {
	submit: SubmitHandler<FormInputPost>;
	isEditing: boolean;
}

const FormPost: FC<FormPostProps> = ({ submit, isEditing }) => {
	const { register, handleSubmit } = useForm<FormInputPost>();

	// fetch list tags
	const { data: dataTags, isLoading: isLoadingTags } = useQuery({
		queryKey: ['tags'],
		queryFn: async () => {
			const response = await axios.get('./api/tags');
			return response.data;
		},
	});
	console.log(dataTags);
	

	return (
		<form
			onSubmit={handleSubmit(submit)}
			className='flex flex-col items-center justify-center gap-5 mt-10'
		>
			<input
				type='text'
				{...(register('tittle'), { required: true })}
				placeholder='Post tittle...'
				className='input input-bordered w-full max-w-lg'
			/>

			<textarea
				{...(register('content'), { required: true })}
				className='textarea textarea-bordered w-full max-w-lg'
				placeholder='Post content...'
			></textarea>

			<select
				{...(register('tag'), { required: true })}
				className='select select-bordered w-full max-w-lg'
				defaultValue={''}
			>
				<option disabled value=''>
					Select Tags
				</option>
				<option>Javascript</option>
				<option>php</option>
				<option>Python</option>
			</select>

			<button type='submit' className='btn btn-primary w-full max-w-lg'>
				{isEditing ? 'Update' : 'Create'}
			</button>
		</form>
	);
};

export default FormPost;
