import React from 'react';

const SearchCityForm = ({setCityName}) => {

  const newCitySearch = (event) => {
    event.preventDefault();
    if (event.target.citySearch.value === "") {
      return;
    }
    setCityName(event.target.citySearch.value);
    event.target.citySearch.value = "";
  }

  return (
    <form onSubmit={newCitySearch} className="weatherSearch">
      <input placeholder="Enter a City..." name="citySearch" className="weatherSearch__input"/>
    </form>
  );
};

export default SearchCityForm;