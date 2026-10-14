import Journal from "./journal/Journal";

function App() {
  return (
    <>
      <a className="skip-link sr-only" href="#journal-root">
        Skip to journal content
      </a>
      <div id="journal-root">
        <Journal />
      </div>
    </>
  );
}

export default App;