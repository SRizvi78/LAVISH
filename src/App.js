import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/Sign-Up/SignUp';

function App() {
  return (
    <Router className="App">
      <Navbar />
      <Switch>
      <Route path='/' exact component={Home}/>  
      <Route path='/products' component={Products} />
      {<Route path='/sign-up' component={SignUp} / >}
      <Route path='/services' exact component={Services}/>    
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
