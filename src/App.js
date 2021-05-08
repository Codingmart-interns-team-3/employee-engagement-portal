import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Games from './views/Games/Games';
import FlappyBird from './components/FlapppyBird/containers/AppContainer';
import Break from './components/games/Breakout/Break';
import Tictactoe from './components/Tictactoe/components/Tictactoe';
import Leaderboard from './components/Leaderboard/Leaderboard';
import ContactPage from './views/ContactUs/ContactPage';
import Home from './views/Home/Home';
import Snake from './views/Board/Board';
import Login from './views/login-register/login.component';
import Register from './views/login-register/register.component';
import ProtectedRouter from './views/login-register/protected';
import { useSelector } from 'react-redux';
// import RockPaper from './views/RockPaperScissor/RockPaper';
// import Play from './views/RockPaperScissor/components/Play';
// import Game from './views/RockPaperScissor/components/Game';

function App() {

  const state = useSelector(state => state);

  console.log(state);

  return (
    <div className='body'>
    <Router>
      <Header />
      <div className='mainBody'>
          <Switch>
            <Route path='/login' exact component={Login} />
            <Route path='/register' exact component={Register} />
            <Route exact path="/" component={Home} />
            <Route exact path="/games" component={Games}/>
            <ProtectedRouter exact path="/snake" component={()=><Snake />} />
            <ProtectedRouter exact path="/brick" component={()=><Break />} />
            <ProtectedRouter exact path="/flappy" component={()=><Flappy user={state?.userdata?.username} />} />
            {/* <ProtectedRouter exact path="/tictactoe" component={<Tictactoe />} /> */}
            <Route path='/tictactoe' exact component={()=><Tictactoe />} />
            <ProtectedRouter exact path="/rockpaper" component={Rockpaper} />
            <ProtectedRouter exact path='/leaderboard'  component={Leaderboard} />
            <Route path='/contactus' exact component={Contactus} />

            {/* <Route path='/' exact component={Home} />
            <Route path='/games' exact component={Games} />
            <Route path='/snake' exact component={()=><Snake user={username} />} />
            <Route path='/brick' exact component={()=><Break user={username} />} />
            <Route path='/flappy' exact component={()=><Flappy user={username} />} />
            <Route path='/tictactoe' exact component={()=><Tictactoe user={username} />} />
            <Route path='/rockpaper' exact component={Rockpaper} /> */}
            <Route path='*'  component={()=><h2>Not Found</h2>} />
        </Switch>
      </div>
        <Footer />
    </Router>
    </div>
  );
}

// const Leaderboard=()=>{
//   return(<h2 className='text-center'>Leaderboard</h2>)
// }
const Rockpaper=()=>{
  return(
    <div className='w-100 h-100' >
      <iframe src="https://rock-paper-mg.netlify.app/" width="100%"  title="description">
      </iframe>
    </div>
  )
}
const Flappy=({user})=>{
  return(
  <div>
    <FlappyBird user={user} />
  </div>
  )
}

const Contactus=()=>{
  return(
    <div className="contact-us">
      <ContactPage />
      <ToastContainer/>
    </div>)
}


export default App;
