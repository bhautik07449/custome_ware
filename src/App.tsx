import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import { FavoritesProvider } from './context/FavoritesContext';

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <AppRoutes />
      </Router>
    </FavoritesProvider>
  );
}

export default App;