import React from "react";
import SearchFilter from './SearchFilter';
import { SEARCH_BUTTON } from '../../environment/const';

class Search extends React.Component {
  render = () => {
    return (
      <div>
        <input />
        <button>{SEARCH_BUTTON}</button>
        <SearchFilter/>
      </div>
    );
  };
}
export default Search;
