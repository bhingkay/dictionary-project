import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="main">
          <div className="App-header">
            <Dictionary defaultKeyword="Hope" />
          </div>
        </div>
        <footer>
          <p>
            Open Source code by: Bhingkay on {""}
            <a
              href="https://github.com/bhingkay/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <span className="vecteezy">
              Vector Vectors by: {""}
              <a href="https://www.vecteezy.com/free-vector/vector">Vecteezy</a>
            </span>
          </p>
        </footer>
      </div>
    </div>
  );
}
