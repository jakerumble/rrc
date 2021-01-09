import Header from "./components/header/header";

import Button from "./components/Button/Button";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="component-section">
          <div className="component-section__header">
            <h3>Button</h3>
          </div>
          <Button shadow>Button</Button>
          <Button inverse>Inverse</Button>
          <Button warning>Warning</Button>
          <Button warningInverse>Warning Inverse</Button>
          <Button danger>Danger</Button>
          <Button dangerInverse>Danger Inverse</Button>
        </div>
      </main>
    </div>
  );
}

export default App;
