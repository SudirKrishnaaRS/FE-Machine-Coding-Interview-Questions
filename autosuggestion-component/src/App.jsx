import "./App.css";
import Autocomplete from "./components/autocomplete";

function App() {
  const staticData = [
    "apple",
    "banana",
    "berry",
    "orange",
    "grape",
    "mango",
    "melon",
    "peach",
    "cherry",
    "plum",
  ];

  const fetchSuggestions = async (query) => {
    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${query}`
    );
    if (!response.ok) {
      throw new Error("Networ error, please try again later");
    }
    const result = await response.json();
    return result.recipes;
  };

  return (
    <>
      <h1>Auto-Complete / Typeahead</h1>
      <Autocomplete
        placeholder={"Enter Recipe"}
        // staticData={staticData}
        fetchSuggestions={fetchSuggestions}
        dataKey={"name"} // Based on this key you will get auto suggestions from
        customLoading={<>Loading Recipes</>}
        onSelect={(res) => console.log(res)}
        onChange={(input) => {}}
        onBlur={(e) => {}}
        onFocus={(e) => {}}
        customStyles={{}}
      />
    </>
  );
}

export default App;
