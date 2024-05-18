import { useState } from "react";
import { Input, Stack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        setSearch(event.currentTarget.value);
    }

    const handleSubmit = () => {
        alert(`The button worked!\n The current searched value is: ${search}`);
    }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack direction="row" align="center">
          <Input variant="filled" placeholder="Search Song Here" size="lg" onChange={handleChange} type="text"/>
          <Button colorScheme="purple" size="lg" type="submit">
            Search
          </Button>
          {/* <Button isLoading colorScheme="purple" size="lg">
          Search
        </Button> */}
        </Stack>
        <h4>{search}</h4>
      </form>
    </>
  );
};

export default SearchBar;
