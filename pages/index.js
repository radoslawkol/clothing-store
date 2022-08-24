import Head from "next/head";
import Image from "next/image";
import Navigation from "../components/Navigation";

const Home = () => {
	return (
		<>
			<Navigation />
			<p className='text-on-primary'>Home Page</p>
		</>
	);
};

export default Home;
