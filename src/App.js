import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer'
import BodyContainer from './components/BodyContainer';

function App() {
  return (
    <div>
      <BodyContainer />
      <Footer />
    </div>
  );
}

export default App;
