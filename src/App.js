import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import HeadlineCards from "./components/HeadlineCards";
import Food from "./components/Food";
import Category from "./components/Category";



function App() {
  return (
   <div className="bg-gray-900">
    <Navbar />
    <Hero />
    <HeadlineCards />
    <Food />
    <Category />
   </div>
  );
}

export default App;
