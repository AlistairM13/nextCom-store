"use client";

import { ShoppingCart } from "lucide-react";

import Currency from "@/components/ui/currency";

import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

interface InfoProps {
    data: Product
};

const Info: React.FC<InfoProps> = ({ data }) => {
    const cart = useCart()

    const onAddToCart = () => {
        cart.addItem(data)
    }

    return (
        <div>
            <h1 className="text-3xl font-bold ">{data.name}</h1>
            <div className="mt-3 flex items-end justify-between">
                <div className="text-xl">
                    <Currency value={data?.price} />
                </div>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold  text-slate-800 dark:text-slate-300">Size:</h3>
                    <span className="font-bold" >
                        {data?.size?.value}
                    </span>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-slate-800 dark:text-slate-300">Color:</h3>
                    <div className="h-6 w-6 rounded-full border border-gray-600" style={{ backgroundColor: data?.color?.value }} />
                </div>
            </div>
            <div className="mt-10 flex items-center gap-x-3">
                <Button onClick={onAddToCart} className="flex items-center font-bold gap-x-2">
                    Add To Cart
                    <ShoppingCart size={20} />
                </Button>
            </div>
        </div>
    );
}

export default Info;
