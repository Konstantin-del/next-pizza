// ctrl + shift + p в поиске snippets: configure user snippets => typescriptreact.json (для кастомных снипетов(шаблонов))
// tsrc

import { cn } from '@/lib/utils';
import React from 'react';
import { Button } from '../ui';

interface Props {
  className?: string;
}

const catigories = ['Pizzes', 'Combo', 'Snacks', 'Coctails', 'Coffee', 'Drinks', 'Dessert' ];
const activeIndex = 5;

export const Categories: React.FC<Props> = ({ className }) => {
  return (
    <div className = {cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className )}>
        {
            catigories.map((category, index) => 
            <a className={cn( 'flex items-center font-bold h-11 rounded-2xl px-5 ',
                activeIndex === index && 'bg-white shadow-md shadow-gray-200 text-primary',
             )} key={index}>
                <button>{category}</button>

            </a>)
        }

    </div>
  );
};