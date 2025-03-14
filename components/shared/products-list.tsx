'use client';

import { cn } from '@/lib/utils';
import { Title } from './title';
import React, { use } from 'react';
import { ProductCard } from './product-card';
import { useIntersection } from 'react-use';
import { useCatigoryStore } from '@/app/store/catigory';
//import { ThemeContext } from '@/app/page';

interface Props {
    title: string;
    categoryId: number;
    products: any[];
    listClassName?: string;
    className?: string;
}



export const ProductsList: React.FC<Props> = ({ 
    title, categoryId, products, listClassName, className } ) => {
    //const {theme, setTheme} = React.useContext(ThemeContext)
    const setActiveCatigoryId = useCatigoryStore((state) => state.setActiveId)
    const intersectionRef = React.useRef(null);
    const intersection = useIntersection(intersectionRef, {threshold: 0.4,})
    
    
    React.useEffect(()=>{
        if(intersection?.isIntersecting){
            setActiveCatigoryId(categoryId);
        }
    },[intersection?.isIntersecting]);

  return (
    <div className = {className} id={title} ref={intersectionRef}>
        <Title text={title} size='lg' className='font-extrabold mb-5' />
        <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
            {products && products.map(product => (
                <ProductCard 
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    imageUrl={product.imageUrl}
                    price={product.items[0].price}
                />
            ))
            }
        </div>
    </div>
  );
};

