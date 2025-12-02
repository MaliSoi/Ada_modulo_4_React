import ThemeToggler from "./components/ThemeToggler";
import { ThemeProvider } from "./components/ThemeContext";


function App() {
  return (
    <ThemeProvider>
      <ThemeToggler/>
    </ThemeProvider>
  );
}

export default App;
