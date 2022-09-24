import { useRouter } from 'next/router';
import React from 'react';

const ReviewDetails = () => {
    const { reviewId, productId } = useRouter().query;
    return (
        <div>
            <h2>Review {reviewId} for product {productId} </h2>
        </div>
    );
};

export default ReviewDetails;