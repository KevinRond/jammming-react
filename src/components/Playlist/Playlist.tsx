import {
  Box,
  Button,
  Flex,
  Input,
  List,
  ListItem,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import Song from "../../Song";
import { useState } from "react";

interface Props {
  songs: Song[];
  onRemove: (song: Song) => void;
}

const Playlist = ({ songs, onRemove }: Props) => {
  const [name, setName] = useState("");
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const handleSubmit = () => {
    alert(`The playlist name will be: ${name}`);
  };

  return (
    <Box
      borderWidth="2px"
      w="40%"
      borderRadius="lg"
      overflow="hidden"
      display="block"
      padding="4"
      maxW="md"
    >
      <VStack>
        <form onSubmit={handleSubmit}>
          <Input
            variant="filled"
            placeholder="Search Song Here"
            size="lg"
            onChange={handleChange}
            type="text"
          />
          <List paddingBottom="20px">
            {songs.map((song) => (
              <ListItem>
                <Flex gap="20">
                  <VStack alignItems="start" gap="0">
                    <h2>{song.songName}</h2>
                    <h3>{song.artistName}</h3>
                  </VStack>
                  <Spacer />
                  <Button type="button" onClick={() => onRemove(song)}>
                    -
                  </Button>
                </Flex>
              </ListItem>
            ))}
          </List>
          <Button
            type="submit"
            colorScheme="purple"
            justifyContent="space-around"
          >
            Save Playlist
          </Button>
        </form>
      </VStack>
    </Box>
  );
};

export default Playlist;
