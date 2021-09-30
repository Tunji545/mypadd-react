import './App.css';
import Footer from './components/Footer.jsx';
import Home from './Pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Events from './Pages/Events.jsx';
import Honorees from './Pages/Honorees.jsx';
import Shops from './Pages/Shops.jsx';
import Blog from './Pages/Blog.jsx';
import Contact from './Pages/Contact.jsx';
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
