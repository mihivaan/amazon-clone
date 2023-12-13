import React, { useState } from 'react';

import { useSearchParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ProductDetails } from './';

import { callAPI } from '../Utils/CallApi';
import { IN_CURRENCY } from '../Utils/constants';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState(null);

  const getSearchResults = () => { 
    const searchTerm = searchParams.get('searchTerm');
    const category = searchParams.get('category');

    callAPI(`data/search.json`)
    .then((searchResults) => {
        const categoryResults = searchResults[category];
        if(searchTerm){
          const result = categoryResults.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()));
          setProducts(result);
        } else {
          setProducts(categoryResults);
        }
    });
   };

  useEffect(() => {
    getSearchResults();
  },[searchParams]);

  return ( 
    <div className='min-w-[1000px] max-w-[1500px] m-auto pt-4'>
      { products && products.map((product, key) => {
          return (
            <Link key={key} to={`/product/${product.id}`}>
              <div className='h-[250px] grid grid-cols-12 rounded mt-1 mb-1'>
                <div className='col-span-2 p-4 bg-gray-200'>
                  <img src={product.image_small} alt="product_image" className='m-auto' />
                </div>
                <div className='col-span-10 bg-gray-50 border-gray-100 hover:bg-gray-100'>
                  <div className="font-medium text-black p-2">
                    <ProductDetails product={product} ratings={true} />
                    <div className='text-xl xl:text-2xl pt-1'>{IN_CURRENCY.format(product.price * 102 /* poundto rupees */)}</div>
                  </div>
                </div>
              </div>
            </Link>
          )
        })

      }
    </div>
  )
}

export default SearchResults;