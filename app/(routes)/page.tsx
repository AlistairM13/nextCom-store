import Container from "@/components/ui/container"
import Billboards from '@/components/ui/billboards'
import getBillboards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/core/product-list";


const HomePage = async () => {
  const products = await getProducts({ isFeatured: true })
  const billboards = await getBillboards();

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboards data={billboards} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}

export default HomePage