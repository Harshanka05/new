
import Login from './pages/Login';

import {Route,Routes,Router} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router><Routes>
        
        <Route element={<Login />}path="/Login"></Route>
        

      </Routes></Router>
      
    </div>
  );
}

export default App;


