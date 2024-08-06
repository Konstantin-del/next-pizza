
import { cn } from '@/lib/utils';
import { Categories, Container, SortPopup } from '../shared';
import React from 'react';

interface Props {
  className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div className = {cn('sticky top-0 bg-white py-5 shadow-black/5 z-10', className)}>
        <Container className='flex items-center justify-between'>
            <Categories />
            <SortPopup />
        </Container>

    </div>
  );
};