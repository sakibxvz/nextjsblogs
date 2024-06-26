import { Pencil, Trash2 } from 'lucide-react';
import Link from 'next/link'
import React from 'react'

const ButtonAction = () => {
  return (
		<div>
			<Link href='/edit/id' className='btn mr-2'>
				<Pencil /> Edit
			</Link>
			<button className='btn btn-error'>
				<Trash2 />
				Delete
			</button>
		</div>
	);
}

export default ButtonAction