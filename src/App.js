import "./App.css";
import Sidenav from "./components/common/Sidenav";
// import Login from "./components/common/Login";
import OrderPage from "./components/pages/orders/OrderPage";
// import DataFetch from "./DataFetch";

function App() {
  return (
    <div className="app d-flex w-100 mx-auto">
      {/* <Login/> */}
      <Sidenav />
      <OrderPage />
      {/* <DataFetch /> */}
    </div>
  );
}

export default App;
