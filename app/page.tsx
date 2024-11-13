
import { Container, Title, TopBar, Filters } from "@/components/shared";
import { ProductCard } from "@/components/shared/product-card";


export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text='All pizza' size='lg' className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pb-14">
        <div className="flex gap-[60px] mt-8" >
          
          {/* filtration */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* list of products */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">List of products
              <ProductCard id={1} name={'mozarela' } price={325} 
              imageUrl="https://media.dodostatic.net/image/r:292x292/11EF9C1DAAFCF3529A62947B9522A8FE.avif "/>
              {/* <ProductsGroupList title="Pizzas" items={[1,2,3,4,5]} /> */}
              {/* <ProductsGroupList title="Pizzas" items={[1,2,3,4,5]} /> */}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
