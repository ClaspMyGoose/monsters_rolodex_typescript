import './search-box.styles.css';


interface ISearchBoxProps {
  placeholder: string;
  className?: string | null; 
  onChangeHandler: (e: object) => void
}

const SearchBox = ({ placeholder, onChangeHandler, className }: ISearchBoxProps) => (
    <input 
      className={`search-box ${className}`}
      type='search'
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );

export default SearchBox; 