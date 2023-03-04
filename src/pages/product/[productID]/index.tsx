import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  const productID = router.query.productID;
  return (
    <h1>Product Details - {productID}</h1>
  )
};

export default ProductDetails;
