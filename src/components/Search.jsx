/* eslint-disable react/prop-types */
import { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchCity, setSearchCity] = useState("");
  const searchFormHandle = (event) => {
    event.preventDefault();
    onSearch(searchCity);
  };

  return (
    <form onSubmit={searchFormHandle}>
      <input
        value={searchCity}
        onChange={(event) => setSearchCity(event.target.value)}
        type='text'
        name='search'
        className='bg-transparent px-3 py-2 border-none outline-none'
        autoComplete='off'
      />
      <button className='hover:bg-transparent bg-white px-5 py-2 rounded-r-md duration-200'>Find</button>
    </form>
  );
};

export default Search;
