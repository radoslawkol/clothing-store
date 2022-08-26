import Head from "next/head";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<>
			<Navigation />
			<p className='text-on-primary'>Home Page</p>
			<Footer />
		</>
	);
};

export default Home;
