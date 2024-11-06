
import { ThemeProvider } from "./components/theme-provider"
import './App.css'
import Bonds from './components/bonds'
import Nevbar from './components/nevbar'
import Portfolio_kyc from './components/portfolio-kyc'

function App() {

  document.body.classList.add('bg-background');
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="m-0">
        <Nevbar />
        <Portfolio_kyc />
        <Bonds />
      </div>
    </ThemeProvider>
  )
}

export default App
