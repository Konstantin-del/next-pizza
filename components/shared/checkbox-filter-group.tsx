'use client'

import React from 'react';
import { FilterChecboxProps, FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui/input';

type item = FilterChecboxProps; 

interface Props {
    title: string;
    items: item[];
    defaultItems: item[];
    limit?: number;
    searchInputPlaceholder?: string;
    onChange?: (value: string[]) => void;
    defoltValue?: string[];
  className?: string;
}

export const CheckboxFilterGroup: React.FC<Props> = (
    { 
        title,
        items,
        defaultItems,
        limit=5,
        searchInputPlaceholder = "Search...",
        onChange,
        defoltValue,
        className
    }) => {

const [showAll, setShowAll] = React.useState(false);
const [searchValue, setSearchValue] = React.useState('');

const listIngredients = showAll ? items.filter(item => item.text.toLowerCase().includes(searchValue)) : defaultItems?.slice(0, limit);

const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value.toLowerCase());
}

  return (
    <div className = { className }>
        <p className='font-bold mb-3'>{title}</p>
        {
            showAll && (
                <div className='mb-5'>
                    <Input onChange={onChangeSearchInput} placeholder={searchInputPlaceholder} className='bg-gray-50 border-none' />
                </div>
            )           
        }
        <div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
            {listIngredients.map((item, index)=>(
                <FilterCheckbox 
                    key={item.value}
                    onCheckedChange={(e)=>console.log(e)} //{onCheckedChange(item.value)}}
                    checked={false} // {selected.has(item.value)}
                    value={item.value}
                    text={item.text}
                    endAdornment={item.endAdornment}  
                />
            ))}
        </div>
        {
            items.length > limit && (
                <button onClick={()=>setShowAll(!showAll)} className='text-primary mt-3'>
                    {showAll ? 'Hide' : 'Show all'}
                </button>
            )
        }
    </div>
  );
};