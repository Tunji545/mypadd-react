import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Events from './components/Events';
import Honorees from './components/Honorees';
import Shops from './components/Shops';
import Blog from './components/Blog';
import Contact from './components/Contact';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/events' component={Events} />
      <Route path='/honorees' component={Honorees} />
      <Route path='/shops' component={Shops} />
      <Route path='/blog' component={Blog} />
      <Route path='/contact' component={Contact} />
    </Switch>
    <Footer />
    </Router>
  );
}

export default App;
