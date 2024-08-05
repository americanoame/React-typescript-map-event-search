import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

type RoutePaths = {
  home: string;
};

const routes: RoutePaths = {
  home: '/',
};

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <div className="main-content">
          <Routes>
            <Route path={routes.home} element={<div>Home</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
