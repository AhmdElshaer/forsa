import Image from "next/image";
import screen from "../../assets/images/Screen.png";

function ProductItem() {
  return (
    <div>
      <div>
        <Image src={screen} alt="screenimage"/>
      </div>
    </div>
  )
}

export default ProductItem