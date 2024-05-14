import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import AlreadyWatchedPage from "./components/AlreadyWatched/AlreadyWatched";
import WatchLaterPage from "./components/WatchLater/WatchLater";
import DataStorageContext from "./contexts/DataStorageContext";
import { useState } from "react";
import movieList from "./data/movies.json";

function App() {
  const [watchLaterList, setWatchLaterList] = useState([]);
  const [alreadyWatchedList, setAlreadyWatchedList] = useState([]);

  const alreadyWatchedListHandler = (idx) => {
    const foundIndex = alreadyWatchedList.findIndex(
      (movie) => movie._id === movieList.movies[parseInt(idx)]._id
    );
    if (foundIndex === -1) {
      setAlreadyWatchedList((prevList) => [
        movieList.movies[parseInt(idx)],
        ...prevList,
      ]);
    }
  };

  const watchLaterListHandler = (idx) => {
    const foundIndex = watchLaterList.findIndex(
      (movie) => movie._id === movieList.movies[parseInt(idx)]._id
    );
    if (foundIndex === -1) {
      setWatchLaterList((prevList) => [
        movieList.movies[parseInt(idx)],
        ...prevList,
      ]);
    }
  };

  return (
    <div className="App">
      <DataStorageContext.Provider
        value={{
          watchLaterList,
          setWatchLaterList,
          alreadyWatchedList,
          setAlreadyWatchedList,
          watchLaterListHandler,
          alreadyWatchedListHandler,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<MovieDetails />} />
            <Route path="/watch-later" element={<WatchLaterPage />} />
            <Route path="/already-watched" element={<AlreadyWatchedPage />} />
          </Routes>
        </BrowserRouter>
      </DataStorageContext.Provider>
    </div>
  );
}

export default App;
