import errorImage from "../images/server-error-image.svg";
import Image from "next/image";
function Error({ statusCode }) {
	return (
		<div className='uppercase text-primary-key bg-secondary  z-50 text-center p-20 h-full w-full flex justify-center items-center rounded-md'>
			<Image src={errorImage} width={130} height={130} />
			<p className='text-lg mb-4'>
				{statusCode
					? `An error ${statusCode} occurred on server`
					: "An error occurred on client"}
			</p>
			<strong className='text-xl'>Try again later</strong>
		</div>
	);
}

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default Error;
