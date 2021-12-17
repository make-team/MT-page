import React from "react";
import "./App.css";
import Root from "./route/Root";
import { useRecoilValue } from "recoil";
import { themeMode } from "store/ColorMode";

function App() {
  const theme = useRecoilValue(themeMode);
  return (
    <div className={theme === 0 ? "Main" : "Dark"}>
      <Root />
    </div>
  );
}

export default App;
