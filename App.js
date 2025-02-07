import Navigators from "./src/navigators";
import { store } from "./src/Store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <Navigators />
    </Provider>
  );
}
