import {
  Box,
  Button,
  Flex,
  List,
  ListItem,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import Song from "../../Song";

interface Props {
  songs: Song[];
  onAdd: (song: Song) => void;
}

const SearchResults = ({ songs, onAdd }: Props) => {
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
        <h1>Search results</h1>
        <List>
          {songs.map((song) => (
            <ListItem>
              <Flex gap="20">
                <VStack alignItems="start" gap="0">
                  <h2>{song.songName}</h2>
                  <h3>{song.artistName}</h3>
                </VStack>
                <Spacer />
                <Button type="button" onClick={() => onAdd(song)}>
                  +
                </Button>
              </Flex>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Box>
  );
};

export default SearchResults;
