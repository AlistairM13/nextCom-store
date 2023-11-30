import Container from "@/components/ui/container"
import Billboards from '@/components/ui/billboards'
import getBillboards from "@/actions/get-billboards";


const HomePage = async () => {
  const billboards = await getBillboards();

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboards data={billboards} />
      </div>
    </Container>
  )
}

export default HomePage