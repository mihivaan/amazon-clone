import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ProductDetails } from './';
import { IN_CURRENCY } from '../Utils/constants';
import { callAPI } from '../Utils/CallApi';

import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState('1');

    const getProduct = () => { 
        callAPI(`data/products.json`)
        .then((productResults)=>{
            setProduct(productResults[id]);
        });
    };

    const addQuantityToProduct = () => { 
        setProduct(product.quantity = quantity);
        return product;
     };

    useEffect(() => {
        getProduct();
    },[]);

    if (!product?.title) {
        return <h1>Loading Product ...</h1>
    }

  return ( product &&
    <div className='h-screen min-w-[1000px] bg-amazonclone-background'>
        <div className='min-w-[1000px] max-w-[1500px] m-auto p-4'>
            <div className='grid grid-cols-10 gap-2'>
                {/* Left */}
                <div className='col-span-3 p-8 rounded bg-white m-auto'>
                    <img src={`${product.image}`} alt="product" />
                </div>
                {/* Middle */}
                <div className='col-span-5 p-4 rounded bg-white divide-y divide-gray-400'>
                    <div>
                        <ProductDetails product={product} ratings={true} />
                    </div>
                    <div className='text-base xl:text-lg mt-3'>
                        { product.description }
                    </div>
                </div>
                {/* Right */}
                <div className='col-span-2 p-4 rounded bg-white'>
                    <div className='text-xl xl:2xl text-red-700 text-right font-semibold'>{ IN_CURRENCY.format(102/* 1GBP to INR */ * product.price) }</div>
                    <div className='text-base xl:lg text-gray-500 text-right font-semibold'>MRP: <span className='line-through'>{ IN_CURRENCY.format(102 * product.oldPrice) }</span></div>
                    <div className='text-sm xl:base text-blue-500 font-semibold mt-3'>Free Returns</div>
                    <div className='text-sm xl:base text-blue-500 font-semibold mt-1'>Free Delivery</div>
                    <div className='text-base xl:lg text-green-700 font-semibold mt-1'>In Stock</div>
                    <div className='text-base xl:lg mt-1'>Quantity:
                        <select onChange={(e) => setQuantity(e.target.value)} className='bg-white border rounded-md focus:border-slate-600'>
                            <option >1</option>
                            <option >2</option>
                            <option >3</option>
                        </select>
                    </div>
                    <Link to={'/checkout'}>
                        <button onClick={() => dispatch(addToCart(addQuantityToProduct()))} className='btn'>Add to Cart</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductPage;