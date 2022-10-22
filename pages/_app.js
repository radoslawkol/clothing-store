import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../reducers/store";
import Layout from "../components/Layout/index";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store} value={store}>
			<Layout>
				<ToastContainer limit={3} />
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}

export default MyApp;
