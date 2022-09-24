import { useRouter } from 'next/router';
import React from 'react';

const ProductDetails = () => {
    // const product = useRouter();
    const productId = useRouter().query.productId;
    return (
        <div>
            <h2>Product Details {productId} </h2>
        </div>
    );
};

export default ProductDetails;