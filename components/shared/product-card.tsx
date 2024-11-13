
import Link from 'next/link';
import React from 'react';
import { Title } from './title';
import { Button } from '../ui';
import { Plus } from 'lucide-react';

interface Props {
  className?: string;
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export const ProductCard: React.FC<Props> = ({ className, id, name, price, imageUrl }) => {
  return (
    <div className = {className}>
        <Link href={`/product/${id}`}>
            <div className='flex justify-center p-6 bg-secondary rounded-lg h-[260px]'>
                <img className='w-[215px] h-[215px]' src={imageUrl} alt={name}/>
            </div>

            <Title text={name} size='sm' className='mb-1 mt-3 font-bold'></Title>
            <p className='text-sm text-gray-400'>
                Chiken, Mozaela, garlic
            </p>
            <div className='flex justify-between items-center mt-4'>
                <span className='text-[20px]'>from <b>{price} $</b></span>
                <Button variant='secondary'><Plus className='w-5 h-5 mr-1'/>shoose</Button>
            </div>
        </Link>
    </div>
  );
};