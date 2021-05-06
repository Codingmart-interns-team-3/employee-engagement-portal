import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Games from './views/Games/Games';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FlappyBird from './components/FlapppyBird/containers/AppContainer';
import Snake from './views/Board/Board';
import Break from './components/games/Breakout/Break';
import Tictactoe from './components/Tictactoe/components/Tictactoe';
import Home from './views/Home/Home';

function App() {
  let name = 'Ragavan';
  return (
    <div className='body'>
    <Router>
      <Header />
      <div className='mainBody'>
          <Switch>
            <Route path='/' exact component={Home} />
              <Route path='/games' exact component={Games} />
              <Route path='/snake' exact component={()=><Snake user={name} />} />
              <Route path='/brick' exact component={()=><Break user={name} />} />
              <Route path='/flappy' exact component={()=><Flappy user={name} />} />
              <Route path='/tictactoe' exact component={()=><Tictactoe user={name} />} />
              <Route path='/rockpaper' exact component={Rockpaper} />
              <Route path='/leaderboard' exact component={Leaderboard} />
              <Route path='/contactus' exact component={Contactus} />
              <Route path='*'  component={()=><h2>Not Found</h2>} />
        </Switch>
      </div>
        <Footer />
    </Router>
    </div>
  );
}

const Leaderboard=()=>{
  return(<h2 className='text-center'>Leaderboard</h2>)
}
const Rockpaper=()=>{
  return(<h2 className='text-center'>Rockpaper Game</h2>)
}
const Flappy=({user})=>{
  return(
  <div>
    <FlappyBird user={user} />
  </div>
  )
}

const Contactus=()=>{
  return(<h2 className='text-center'>ContactUs page</h2>)
}


export default App;
