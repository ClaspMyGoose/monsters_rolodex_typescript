import './App.css';
import {useState, useEffect} from 'react';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';

function App() {

  const [monsters, setMonsters] = useState([]);
  const [searchBoxValue, setSearchBoxValue] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((data) => {return data.json()})
      .then((userList) => {
        setMonsters(userList);  
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  
  useEffect(() => {
    setFilteredMonsters(monsters.filter(monster => monster.name.toLowerCase().includes(searchBoxValue.toLowerCase())))
  }, [monsters, searchBoxValue])

  const onSearchChange = (e) => {
    setSearchBoxValue(e.target.value);
  }

  
  
  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox placeholder='search monsters' onChangeHandler={onSearchChange}/>
      <CardList items={filteredMonsters}/>
    </div>
  );
}


export default App;
