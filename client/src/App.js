
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import HomeScreen from './pages/HomeScreen';
import Header from './components/Header'
import Footer from './components/Footer'
import ProductScreen from './pages/ProductScreen';
import CartScreen from './pages/CartScreen';
import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Router>
            <Header />
            <main className='py-3'>
                <Container>
                    <Route exact path='/' component={HomeScreen} />
                    <Route path='/product/:id' component={ProductScreen} />
                    <Route path='/cart/:id?' component={CartScreen} />
                    <Route path='/login' component={LoginScreen} />
                    <Route path='/register' component={RegisterScreen} />
                </Container>
            </main>
            <Footer />
        </Router>
    )
}

export default App
