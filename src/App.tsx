import { MainContextProvider } from './context';
import { Router } from './routes';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <MainContextProvider>
      <Router />
    </MainContextProvider>
  )
}

export default App
