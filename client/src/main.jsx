import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ConfigProvider, theme } from "antd";
import './index.css'
import { BrowserRouter } from 'react-router-dom'

function Main() {
  const [themeMode, setThemeMode] = useState("light");

  return (
    <ConfigProvider
      theme={{
        algorithm: themeMode === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <BrowserRouter>
        <App setThemeMode={setThemeMode} />
      </BrowserRouter>
    </ConfigProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
