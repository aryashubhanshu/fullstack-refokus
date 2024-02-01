import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Marques from "./components/Marques";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Stripes from "./components/Stripes";
import Work from "./components/Work";

function App() {
  return (
    <div className="w-full bg-zinc-900 text-white font-['Satoshi']">
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marques />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
