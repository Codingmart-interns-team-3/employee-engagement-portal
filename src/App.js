import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Board from './views/Board/Board';
import Break from './components/games/Breakout/Break';

function App() {
  return (
    <div className='body'>
    <Router>
      <Header />
      <div className='mainBody'>
          <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/snake' exact component={Board} />
              <Route path='/brick' exact component={Break} />
              <Route path='/flappy' exact component={Flappy} />
              <Route path='/contactus' exact component={Contactus} />
              <Route path='*'  component={()=><h2>Not Found</h2>} />
        </Switch>
      </div>
        <Footer />
    </Router>
    </div>
  );
}

// const Snake=()=>{
//   return(<h2 className='text-center'>Snake Game</h2>)
// }
const Flappy=()=>{
  return(<h2 className='text-center'>Flappy Game</h2>)
}

const Contactus=()=>{
  return(<h2 className='text-center'>ContactUs page</h2>)
}


export default App;
