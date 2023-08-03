import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "../src/data"
import Hero from "./components/Hero";

function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}   //{...item}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Hero/>
      <section className="cards--list">{cards}</section>
    </div>
  );
}

export default App;
