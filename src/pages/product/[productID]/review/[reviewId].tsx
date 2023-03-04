import { useRouter } from "next/router";

const Review = () => {
  const router = useRouter();
  const reviewId = router.query.reviewId;
  return (
    <h1>Review Details - {reviewId}</h1>
  )
};

export default Review;
