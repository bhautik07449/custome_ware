import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import { FavoritesProvider } from './context/FavoritesContext';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <ScrollToTop />
        <AppRoutes />
      </Router>
    </FavoritesProvider>
  );
}

export default App;