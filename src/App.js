import "./reset.css";
import "./App.scss";
import {useState, useEffect} from "react"
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  //// Handle Window Width for Responsive Design
  const [size, setSize] = useState(window.innerWidth);
  const handleSize = () => setSize(window.innerWidth);
  const isDesktop = size >= 1024;
  useEffect(() => {
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);
  // Store theme locally
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light-theme"
  );

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
      <Main isDesktop={isDesktop} />
    </div>
  );
}

export default App;
