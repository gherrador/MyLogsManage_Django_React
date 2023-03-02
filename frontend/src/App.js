import { DashBoardRoutes, HomeRoutes } from './routes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
function App() {

  return (
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path='/dashboard/*' element={< DashBoardRoutes />} />
            <Route path='*' element={<HomeRoutes />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
