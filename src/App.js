import "./reset.css";
import "./App.scss";
import {useState, useEffect} from "react"
import Header from "./components/Header";
import Main from "./components/Main";

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div className="App">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Main />
    </div>
  );
}

export default App;
