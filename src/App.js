import './App.css';
import Login from "../src/Login/Login.jsx"; 
import Signup from "../src/signup/Signup.jsx";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import react from "../src/react/Register.php";

function App() {
  const route = createBrowserRouter([ 
    {
    path:"/",
    element:<Signup />,
   },
   {
    path:"/login",
    element:<Login />,
   }
  ])
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
