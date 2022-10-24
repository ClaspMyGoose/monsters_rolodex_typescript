import { ChangeEventHandler } from 'react';
import './search-box.styles.css';


interface ISearchBoxProps {
  placeholder: string;
  className?: string | null; 
  onChangeHandler: ChangeEventHandler<HTMLInputElement>
}

// type SearchBoxProps = {
//   placeholder: string;
//   className?: string | null;
//   onChangeHandler: ChangeEventHandler<HTMLInputElement>
// }

const SearchBox = ({ placeholder, onChangeHandler, className }: ISearchBoxProps) => (
    <input 
      className={`search-box ${className}`}
      type='search'
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );

export default SearchBox; 