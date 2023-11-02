import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Invoice from './pages/Invoice';

function App() {
    return (
        <Router>
            <Navbar />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/invoice/:referenceNumber" component={Invoice} />
            </Switch>
        </Router>
    );
}

export default App;
