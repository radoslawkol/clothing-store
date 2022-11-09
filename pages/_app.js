import "../styles/globals.css";
import { Provider } from "react-redux";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import store from "../reducers/store";
import Layout from "../components/Layout/index";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store} value={store}>
			<PayPalScriptProvider
				options={{ "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }}
			>
				<Layout>
					<ToastContainer limit={3} />
					<Component {...pageProps} />
				</Layout>
			</PayPalScriptProvider>
		</Provider>
	);
}

export default MyApp;
