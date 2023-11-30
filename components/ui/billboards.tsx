"use client"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Billboard } from "@/types";
import { Carousel } from "react-responsive-carousel";

interface BillboardProps {
  data: Billboard[];
}

const Billboards: React.FC<BillboardProps> = ({
  data
}) => {

  return (
    <Carousel
      showArrows={false}
      showStatus={false}
      infiniteLoop={data.length > 1 ? true : false}
      showIndicators={false}
      autoPlay={true}
    >
      {data.map(item => (
        <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
          <div style={{ backgroundImage: `url(${item?.imageUrl})`, backgroundColor:"#ccc" }} className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
            <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
              <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
                {item?.label}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Billboards;
