import { RouterProvider } from 'react-router-dom';
import './App.css';
import ThemeProvider from './Contexts/ThemeProvider';
import router from './Routes/Router';

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router}>

      </RouterProvider>
    </ThemeProvider>
  );
}

export default App;
