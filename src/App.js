import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import MyOrders from './Components/MyOrders/MyOrders';
import Reviews from './Components/Reviews/Reviews';
import Payment from './Components/Payment/Payment';
import AddProducts from './Components/AddProducts/AddProducts'
import MakeAdmin from './Components/MakeAdmin/MakeAdmin';
import AllCars from './Components/AllCars/AllCars';
import Footer from './Components/Footer/Footer';
import PurchaseProcess from './Components/PurchaseProcess/PurchaseProcess';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Components/Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ManageOrder from './Components/ManageOrder/ManageOrder';
import ManageUser from './Components/ManageUser/ManageUser';



function App() {
  return (
    <div className="App">
      
      <AuthProvider>
      <BrowserRouter>
        <Navigation></Navigation>
        <Switch>
        <Route exact path='/'><Homepage></Homepage></Route>
        <Route exact path='/home'><Homepage></Homepage></Route>
        <Route exact path='/allCars'><AllCars></AllCars></Route>
        <PrivateRoute exact path='/purchase/:id'><PurchaseProcess></PurchaseProcess></PrivateRoute>
        <PrivateRoute exact path='/my-order'><MyOrders></MyOrders></PrivateRoute>
        <PrivateRoute exact path='/review'><Reviews></Reviews></PrivateRoute>
        <PrivateRoute exact path='/payment'><Payment></Payment></PrivateRoute>
        <PrivateRoute exact path='/manage-orders'><ManageOrder></ManageOrder></PrivateRoute>
        <PrivateRoute exact path='/manage-users'><ManageUser></ManageUser></PrivateRoute>
        <PrivateRoute exact path='/add-products'><AddProducts></AddProducts></PrivateRoute>
        <PrivateRoute exact path='/make-admin'><MakeAdmin></MakeAdmin></PrivateRoute>
        <Route exact path='/login'><Login></Login></Route>
        <Route exact path='/register'><Register></Register></Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
