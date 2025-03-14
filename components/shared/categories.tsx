// ctrl + shift + p в поиске snippets: configure user snippets => typescriptreact.json (для кастомных снипетов(шаблонов))
// tsrc
'use client'

import { useCatigoryStore } from '@/app/store/catigory';
import { cn } from '@/lib/utils';
import React from 'react';


interface Props {
  className?: string;
}

const catigories = [
  {id:0, name: 'Pizzas'},
  {id:1, name: 'Combo'}, 
  {id:2, name: 'Snacks'},
  {id:3, name: 'Coctails'},
  {id:4, name: 'Coffee'},
  {id:5, name: 'Drinks'}, 
  {id:6, name: 'Dessert'},
];

export const Categories: React.FC<Props> = ({ className }) => {

  const catigoryActiveId = useCatigoryStore((state) => state.activeId);

  return (
    <div className = {cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className )}>
        {
            catigories.map(({id, name}, index) => 
            <a className={cn( 'flex items-center font-bold h-11 rounded-2xl px-5 ',
              catigoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary',
             )} 
             href={`/#${name}`}
             key={index}>
                <button>{name}</button>
            </a>)
        }

    </div>
  );
};