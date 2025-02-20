import "./App.css";
import ContainerMain from "./components/containerMain/ContainerMain";
import Header from "./components/header/header";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <ContainerMain />
      </div>
    </>
  );
}

export default App;
