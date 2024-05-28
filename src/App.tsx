import "./App.css";
import { Button, ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Song from "./Song";
import Playlist from "./components/Playlist";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";

function App() {
  const [searchedSongs, setSearchedSongs] = useState<Song[]>([
    { songName: "song 1", artistName: "artist name 1" },
    { songName: "song 2", artistName: "artist name 2" },
    { songName: "song 3", artistName: "artist name 3" },
    { songName: "song 4", artistName: "artist name 4" },
    { songName: "song 5", artistName: "artist name 5" },
  ]);
  const [selectedSongs, setSelectedSongs] = useState<Song[]>([]);
  useEffect(() => {}, [selectedSongs, searchedSongs]);

  const handleAdd = (song: Song) => {
    setSelectedSongs([...selectedSongs, song]);
  };

  const handleRemove = (song: Song) => {
    setSelectedSongs(selectedSongs.filter((s) => s.songName !== song.songName));
  };

  return (
    <ChakraProvider>
      <SearchBar></SearchBar>
      <div className="lists">
        <SearchResults songs={searchedSongs} onAdd={handleAdd}></SearchResults>
        <Playlist songs={selectedSongs} onRemove={handleRemove}></Playlist>
      </div>
    </ChakraProvider>
  );
}

export default App;
