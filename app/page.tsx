'use client'

import { Container, Title, TopBar, Filters } from "@/components/shared";
import { ProductsList } from "@/components/shared/products-list";
import React, { useState } from "react";

type myContextType = {
  theme: number;
  setTheme: React.Dispatch<React.SetStateAction<number>>;
}

export const ThemeContext = React.createContext<myContextType | null>(null);

export default function Home() {
 //const [theme, setTheme] = useState(0)
 


  return (
    <>
      <Container className="mt-10">
        <Title text='All pizza' size='lg' className="font-extrabold" />
      </Container>
      
      <TopBar/>
      <Container className="pb-14">
        <div className="flex gap-[60px] mt-8" >
          
          {/* filtration */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* list of products */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsList categoryId={0} title="Pizzas" products={[{
                id:1,
                name: 'aldente',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                items:[{price:550}]
              },
              {
                id:2,
                name: 'aldente',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                items:[{price:550}]
              },
              {
                id:3,
                name: 'aldente',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                items:[{price:550}]
              },
              {
                id:4,
                name: 'aldente',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                items:[{price:550}]
              }
              ]}/>
              <ProductsList categoryId={1} title="Combo" products={[{
                id:1,
                name: 'hz',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                items:[{price:550}]
              },
              {
                id:2,
                name: 'shawuha',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                items:[{price:550}]
              }
              ]}/>
              <ProductsList categoryId={2} title="Snacks" products={[{
                id:1,
                name: 'shawuha',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                items:[{price:550}]
              },
              {
                id:2,
                name: 'shawuha',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                items:[{price:550}]
              }
              ]}/>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
