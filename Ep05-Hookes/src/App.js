import { useState } from "react";
import Header from "./components/Header";
import { restaurantsData } from "./utils/mockData";
import RestaurantsCard from "./components/RestaurantsCard";
import "./App.css";

function App() {
  let [kashif, setKashif] = useState(restaurantsData);
  console.log("setKashif: ", setKashif);

  function handleFilter() {
    const filteredRes = kashif.filter((each) => each.info.avgRating > 4.2);

    setKashif(filteredRes);
  }

  return (
    <>
      <Header />

      <button className="filter-btn" onClick={handleFilter}>
        Top Rated Restaurants
      </button>
      <section className="res-container">
        {kashif.map((res) => (
          <RestaurantsCard key={res.info.id} {...res.info} />
        ))}
      </section>
    </>
  );
}

export default App;
