import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/list.component';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

 class App extends Component {
     constructor(){
         super();

         this.state = {
             monsters: [],
             searchField: ''
         }
     }

     componentDidMount() {
         fetch('https://jsonplaceholder.typicode.com/users')
             .then(res => res.json())
             .then(users => this.setState({monsters: users}))
     }

     render() {

         const { monsters, searchField } = this.state;
         const filteredMonsters = monsters.filter(monster => {
            return  monster.name.toLowerCase().includes(searchField.toLowerCase())
         });

        return (
            <div className="App">
                <img src={logo} className="App-logo" alt="logo" />

                <input type='search' placeholder='search cats' onChange={ e => this.setState({ searchField: e.target.value } )}
                />
                <CardList monsters={filteredMonsters} />
              {/*  <CardList monsters={ monsters } />*/}

         </div>
        );
     }
 }
export default App;
