import errorImage from "../images/server-error-image.svg";
import Image from "next/image";

function Error({ statusCode }) {
	<div className='uppercase text-primary-key bg-secondary z-50  h-screen w-full flex justify-center items-center'>
		<div className='text-center bg-on-primary-key rounded-xl'>
			<Image src={errorImage} width={400} height={260} alt='Server error' />
			<p className='text-lg mb-4'>
				{statusCode
					? `An error ${statusCode} occurred on server`
					: "An error occurred on client"}
			</p>
			<strong className='text-xl'>Try again later</strong>
		</div>
	</div>;
}

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default Error;
