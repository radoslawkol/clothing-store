import ButtonPrimary from "../utils/ButtonPrimary";
import Error from "./_error";
const Home = () => {
	return (
		<>
			<header className='relative bg-cover bg-hero w-full h-[59.5vh] bg-center'>
				<div className='w-[200px] md:w-[300px] lg:w-[500px] lg:p-8 bg-secondary/75 absolute top-[20%] left-1/2 -translate-x-1/2 rounded-xl p-4 text-center'>
					<h1 className='mb-4  uppercase font-thin text-xl lg:text-2xl text-primary-key tracking-wider'>
						See new Woman collection
					</h1>
					<ButtonPrimary href='/woman/clothing'>See more</ButtonPrimary>
				</div>
			</header>
		</>
	);
};

export default Home;
