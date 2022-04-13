import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';

import './App.css';
import SearchBox from './components/search-box/search-box.component';

const App = () => {

  const [searchField, setSearchField] = useState(''); //[value, setValue]
  const [monsters, setMonsters] = useState([])
  const [title,setTitle] = useState('')
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)
  // console.log(searchField)
  const onSearchChange = (event)=>{
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

  const onTitleChange = (event) =>{
    const titleString = event.target.value.toLocaleLowerCase()
    setTitle(titleString)
  }

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=> setMonsters(users))
  },[]);

  useEffect(()=>{
    const newfilteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })
    setFilteredMonsters(newfilteredMonsters)
  },[monsters, searchField])

  

  return (
    <div className="App">
        {/* <input 
        className='search-box' 
        type='search' 
        placeholder='search monsters' 
        onChange={onSearchChange}/> */}
        {/* {filteredMonsters.map(monster=>{
          return <h1 key={monster.id}>{monster.name}</h1>
        })} */}
        <h1 className='app-title'>{title}</h1>
        <SearchBox onChangeHandler={onSearchChange} placeHolder='search monsters' className='monsters-search-box'/>
        <SearchBox onChangeHandler={onTitleChange} placeHolder='change title' className='monsters-search-box'/>
        <CardList monsters={filteredMonsters}/>
      </div> 
  )
}


// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       monsters:[],
//       searchField:''
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users=>this.setState(()=>{
//       return {monsters:users}
//     }),()=>{
//       console.log(this.state)
//     })
//   }

//   onSearchChange = (event)=>{
//     const searchField = event.target.value.toLocaleLowerCase()
//     this.setState(()=>{
//       return {searchField}
//     },()=>{})
//   }

//   render() {

//     const {monsters, searchField} = this.state
//     const {onSearchChange} = this

//     const filteredMonsters = monsters.filter((monster)=>{
//       return monster.name.toLowerCase().includes(searchField.toLowerCase())
//     })
//     return (
           
//     ); 
//   }
// }

export default App;
