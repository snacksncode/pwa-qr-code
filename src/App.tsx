import "./App.css";
import { Content } from "./components/Content/Content";

function App() {
  return (
    <div className="App">
      <div className="logos">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src="/react.svg" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="global-heading">QR Code PWA</h1>
      <div className="card">
        <Content />
      </div>
    </div>
  );
}

export default App;
