import Button from "./components/Button/Button";
import IconPlus from "./assets/svg/plus.svg?component";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <h1>Hello 42</h1>
        <Button>
          <IconPlus fill="blue" />
          <span>Play</span>
        </Button>
      </Layout>
    </div>
  );
};

export default App;
