import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="App-header">
          <Dictionary />
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
            Nature Vectors by:
            <a href="https://www.vecteezy.com/free-vector/nature">Vecteezy</a>
          </span>
        </p>
      </footer>
    </div>
  );
}
