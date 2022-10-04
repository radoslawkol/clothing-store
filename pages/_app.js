import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../reducers/store";

function MyApp({ Component }) {
	return (
		<Provider store={store} value={store}>
			<Component />
		</Provider>
	);
}

export default MyApp;
