import GenreMovieList from "./Components/GenreMovieList";
import Header from "./Components/Header";
import ProductionHouse from "./Components/ProductionHouse";
import Slider from "./Components/Slider";

export default function App() {
  return (
    <div>
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
    </div>
  );
}
