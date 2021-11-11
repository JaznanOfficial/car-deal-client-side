import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import MyOrders from './Components/MyOrders/MyOrders';
import Reviews from './Components/Reviews/Reviews';
import Payment from './Components/Payment/Payment';
import ManageOrder from './Components/ManageOrder/ManageOrder';
import AddProducts from './Components/AddProducts/AddProducts'
import MakeAdmin from './Components/MakeAdmin/MakeAdmin';
import AllCars from './Components/AllCars/AllCars';
import Footer from './Components/Footer/Footer';
import PurchaseProcess from './Components/PurchaseProcess/PurchaseProcess';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation></Navigation>
        <Switch>
        <Route exact path='/'><Homepage></Homepage></Route>
        <Route exact path='/home'><Homepage></Homepage></Route>
        <Route exact path='/allCars'><AllCars></AllCars></Route>
        <Route exact path='/purchase/:id'><PurchaseProcess></PurchaseProcess></Route>
        <Route exact path='/my-order'><MyOrders></MyOrders></Route>
        <Route exact path='/review'><Reviews></Reviews></Route>
        <Route exact path='/payment'><Payment></Payment></Route>
        <Route exact path='/manage-orders'><ManageOrder></ManageOrder></Route>
        <Route exact path='/add-products'><AddProducts></AddProducts></Route>
        <Route exact path='/make-admin'><MakeAdmin></MakeAdmin></Route>
        <Route exact path='/login'><Login></Login></Route>
        <Route exact path='/register'><Register></Register></Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
