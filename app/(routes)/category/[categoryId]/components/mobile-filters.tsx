"use client"
import { Filter as FilterIcon } from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Color, Size } from "@/types"
import IconButton from "@/components/ui/icon-button"
import Filter from "./filter"


interface MobileFiltersProps {
  sizes: Size[],
  colors: Color[],
}

const MobileFilters: React.FC<MobileFiltersProps> = ({
  sizes,
  colors
}) => {
  return (
    <div className="lg:hidden z-50 fixed bottom-6 right-6">
      <Sheet  >
        <SheetTrigger>
          <IconButton
            variant="outline"
            className="h-14 w-14 bg-black border-none hover:bg-black"
            icon={<FilterIcon size={22} className="text-white" />}
          />
        </SheetTrigger>
        <SheetContent className="h-[70%]  rounded-t-3xl overflow-y-auto" side="bottom">
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
          </SheetHeader>
          <div className="p-4">
            <Filter
              valueKey="sizeId"
              name="Sizes"
              data={sizes}
            />
            <Filter
              valueKey="colorId"
              name="Colors"
              data={colors}
            />
          </div>
        </SheetContent>
      </Sheet>

    </div>
  )
}

export default MobileFilters