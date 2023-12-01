"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import { Product } from "@/types";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

interface ProductCard {
  data: Product
}

const ProductCard: React.FC<ProductCard> = ({
  data
}) => {
  const router = useRouter();
  const cart = useCart()
  const previewModal = usePreviewModal()

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    // To prevent onClick event on the whole div from triggering / prevent routing
    event.stopPropagation()

    previewModal.onOpen(data)
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()
    cart.addItem(data)
  };

  return (
    <div onClick={handleClick} className="group cursor-pointer rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl  relative">
        <Image
          sizes="100%"
          src={data.images?.[0]?.url}
          alt={data.name ? `Image for ${data.name}` : "Product Image"}
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition hidden sm:block absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} />}
            />
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-neutral-400">{data.category?.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
}

export default ProductCard;