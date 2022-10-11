import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../reducers/store";
import Layout from "../components/Layout/index";

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store} value={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}

export default MyApp;
