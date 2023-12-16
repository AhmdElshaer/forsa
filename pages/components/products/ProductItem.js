import Image from "next/image";
import location from "../../assets/images/location.png";
import bed from "../../assets/images/bed.png";
import bath from "../../assets/images/bath.png";
import sqm from "../../assets/images/area.png";

function ProductItem({image, price, address, bedrooms_no, bathrooms_no, area}) {
  return (
    <div className="">
      <div className="max-w-[300px] max-h-[218px] rounded-2xl overflow-hidden">
        <img className="object-contain" src={`${image}`} alt="screenimage"/>
      </div>

      <div className="flex flex-col gap-[13px] relative p-2 rounded-2xl mt-[-30px] bg-white z-10">
        <p className="font-bold">{price} EGP/mo</p>
        <p className="flex items-center gap-2 text-[#6D7888]">
          <Image src={location} alt="locationicon" width={15} />
          {address}
        </p>

        <div className="flex justify-between text-[#6D7888] text-[11px]">
          <p className="flex gap-2">
            <Image src={bed} alt="bedicon" objectFit="contain"/>
            <span>{bedrooms_no} BR(s)</span>
          </p>
          <p className="flex gap-2">
            <Image src={bath} alt="bathicon" objectFit="contain" />
            <span>{bathrooms_no} Bath(s)</span>
          </p>
          <p className="flex gap-2">
            <Image src={sqm} alt="areaicon" objectFit="contain" />
            <span>{area} sqm</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductItem