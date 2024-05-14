import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import DataStorageContext from "./contexts/DataStorageContext";
import { useState } from "react";

function App() {
  const [watchLaterList, setWatchLaterList] = useState([]);
  const [alreadyWatchedList, setAlreadyWatchedList] = useState([]);

  return (
    <div className="App">
      <DataStorageContext.Provider
        value={{
          watchLaterList,
          setWatchLaterList,
          alreadyWatchedList,
          setAlreadyWatchedList,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </DataStorageContext.Provider>
    </div>
  );
}

export default App;
