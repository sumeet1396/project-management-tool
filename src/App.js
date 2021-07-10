import { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Components/navbar/Navbar';

function App() {
  return (
   <Fragment>
     <BrowserRouter>
      <Navbar />
     </BrowserRouter>
   </Fragment>
  );
}

export default App;
