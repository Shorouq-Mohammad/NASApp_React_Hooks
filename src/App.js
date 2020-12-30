import React, { useEffect, useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import ButtonAppBar from './components/ButtonAppBar';
import Home from './components/Home';
import Search from './components/Search';
import Favorites from './components/Favorites';
import axios from 'axios'

function App() {
  const [favorites, setFavorites] = useState([])

  useEffect(()=> {
      async function fetchData(){
          const favorites = await axios.get("http://localhost:4200/images")
          setFavorites(favorites.data)
      }
      fetchData()
  }, [])

  return (
    <div className="App">
      <Router>
        <ButtonAppBar />
        <Route path="/home" exact render={() => <Home  />} />
        <Route path="/search" exact render={() => <Search />} />           
        <Route path="/favorites" exact render={() => <Favorites favorites={favorites} />} />
        <Route path="/favorite/:id" exact render={({ match }) => <Favorites match={match} favorites={[favorites.find(f => f._id === match.params.id )]}/>} />
      </Router>
    </div>
  );
}

export default App;
