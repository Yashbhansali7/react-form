import './app.css';
import { Signin } from './components/Signin';

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Signin />
        </div>        
      </div>
    </div>
  );
}

export default App;
