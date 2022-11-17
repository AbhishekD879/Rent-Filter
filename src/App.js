
import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from "./Pages/Home/Home"
import ManageProperty from './Pages/ManageProperty/ManageProperty';
import Sell from './Pages/Sell/Sell';
import Buy from './Pages/Buy/Buy';
import Resources from './Pages/Resources/Resources';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Rent from './Pages/Rent/Rent';
import {QueryClientProvider,QueryClient} from "react-query"
const queryClient= new QueryClient()
function App() {
  return (
    <div className="App h-full w-full">
     <QueryClientProvider client={queryClient}>
     <Router>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/buy' element={<Buy/>} />
          <Route path='/sell' element={<Sell/>} />
          <Route path='/manageproperty' element={<ManageProperty/>} />
          <Route path='/resources' element={<Resources/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='rent' element={<Rent/>}/>
      </Routes>
     </Router>
     </QueryClientProvider>
    </div>
  );
}

export default App;
