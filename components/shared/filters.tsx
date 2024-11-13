'use client'

import { RangeSlider } from '.';
import { Input } from '../ui';
import { CheckboxFilterGroup } from './checkbox-filter-group';
import { FilterCheckbox } from './filter-checkbox';
import { Title } from './title';

import React from 'react';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className = {className}>
        <Title text='Filtration' size='sm'  className='mb-5 font-bold' />
        {/* top checkbox */}
        <div className='flex flex-col gap-4'>
          <FilterCheckbox text="Can collect a order" value="1" />
          <FilterCheckbox text="New" value="2" />
        </div>
        {/* filter prices */}
        <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
          <p className='font-bold mb-3'>Coice cost</p>
          <div className='flex gap-3 mb-5'>
            <Input type='number' placeholder='0' min={0} max={1000} defaultValue={0} />
            <Input type='number' placeholder='1000' min={100} max={1000} />
          </div>

          <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
        </div>

        <CheckboxFilterGroup 
          title='Ingredients'
          className='mt-5'
          limit={6}
          defaultItems={[
            {
              text: 'Сырный соус',
              value: '1',
            },
            {
              text: 'Моццарелла',
              value: '2',
            },
            {
              text: 'Чеснок',
              value: '3',
            },
            {
              text: 'Солённые огурчики',
              value: '4',
            },
            {
              text: 'Красный лук',
              value: '5',
            },
            {
              text: 'Томаты',
              value: '6',
            },
          ]}
          items={[
            {
              text: 'Сырный соус',
              value: '1',
            },
            {
              text: 'Моццарелла',
              value: '2',
            },
            {
              text: 'Чеснок',
              value: '3',
            },
            {
              text: 'Солённые огурчики',
              value: '4',
            },
            {
              text: 'Красный лук',
              value: '5',
            },
            {
              text: 'Томаты',
              value: '6',
            },
            {
              text: 'Сырный соус',
              value: '7',
            },
            {
              text: 'Моццарелла',
              value: '8',
            },
            {
              text: 'Чеснок',
              value: '9',
            },
            {
              text: 'Солённые огурчики',
              value: '10',
            },
            {
              text: 'Красный лук',
              value: '11',
            },
            {
              text: 'Томаты',
              value: '12',
            },
          ]}
        />
    </div>
  );
};