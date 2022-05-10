import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import List from "./components/List/List";
import { loadListActionCreate } from "./redux/feature/listSlice";
import grocerys from "./utils/grocerys";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadListActionCreate(grocerys));
  }, [dispatch]);

  return (
    <div className="container-fluid">
      <Header />
      <Info />
      <main className="row py-4">
        <List />
      </main>
    </div>
  );
}

export default App;
