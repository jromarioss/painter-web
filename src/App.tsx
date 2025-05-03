import { MainContextProvider } from "./context";
import { Router } from "./routes";

function App() {
  return (
    <MainContextProvider>
      <Router />
    </MainContextProvider>
  )
}

export default App;