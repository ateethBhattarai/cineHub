import Movies from "./components/Movies";
import SearchInput from "./components/SearchInput";

const App = () => {
  return (
    <div className="container">
      <SearchInput />
      <Movies />
    </div>
  );
};

export default App;
