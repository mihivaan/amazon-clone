import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react'
import { useNavigate, createSearchParams } from 'react-router-dom'

import { callAPI } from '../Utils/CallApi';

const Search = () => {
  const [suggestions, setSuggestions] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const navigate = useNavigate();

  const onHandleSubmit = (e) => { 
    e.preventDefault();

    navigate({
      pathname: "search",
      search: `${
        createSearchParams({
          category: `${category}`,
          searchTerm: `${searchTerm}`
        })
      }`
    });

    setSearchTerm('');
    setCategory('All');
   };

  const getSuggestions = () => { 
    callAPI(`data/suggestions.json`)
    .then((suggestionResults) => {
      setSuggestions(suggestionResults);
    });
   };

  useEffect(() => {
    getSuggestions();
  },[]);

  
  console.log(suggestions);
  console.log(searchTerm);

  return (
    <div className='w-[100%]'>
        <div className='flex items-center h-10 bg-amazonclone-yellow rounded'>
            <select onChange={(e) => setCategory(e.target.value)} name="" id="" className='p-2 bg-grey-300 text-black h-[100%] rounded-l text-xs xl:text-sm'>
                <option value="">All</option>
                <option value="">Deals</option>
                <option value="">Amazon</option>
                <option value="">Fashion</option>
                <option value="">Computers</option>
                <option value="">Home</option>
                <option value="">Mobiles</option>
            </select>
            <input type="text" className='flex grow items-center h-[100%] text-black' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <button onClick={ onHandleSubmit } className='w-[45px]'>
                <MagnifyingGlassIcon className='h-[27px] m-auto stroke-slate-900' />
            </button>
        </div>
        { suggestions &&
          <div className='bg-white text-black w-full z-40 absolute'>
            {
              suggestions.filter((suggestion) => {
                const currentSearchTerm = searchTerm.toLowerCase();
                const title = suggestion.title.toLowerCase();
                return (
                  currentSearchTerm &&
                  title.includes(currentSearchTerm) 
                  // && title !== currentSearchTerm
                )
              })
              .slice(0, 10)
              .map((suggestion) => (
                <div key={suggestion.id} onClick={(e) => {
                  setSearchTerm(suggestion.title); 
                  e.target.style.display = 'none';
                }}>
                  {suggestion.title}
                </div>
              ))
              
            }
          </div>
        }
    </div>
  )
}

export default Search