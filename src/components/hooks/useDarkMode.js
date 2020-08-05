import "./useLocalStorage";
import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage();

  const toggleMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  
  useEffect(() => {
    document.body.classList.toggle("dark-mode");
  }, [darkMode]);

  return [darkMode, toggleMode, setDarkMode];
};

export default useDarkMode;
