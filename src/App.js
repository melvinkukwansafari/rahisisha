
import './App.css';

import Comments from './components/Comments'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      
        
      <Routes>
        <Route path="/" element={<Comments />} />
      </Routes>
        
    </div>
  );
}

export default App;
