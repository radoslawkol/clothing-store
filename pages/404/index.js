import Image from "next/image";
import Link from "next/link";
import image from "../../images/pageNotFoundImage.svg";

export default function Custom404() {
	<div className='bg-secondary h-screen flex items-center justify-center'>
		<div className='bg-on-primary-key text-center rounded-xl p-4'>
			<Image src={image} alt='Not found' width={400} height={260} />
			<h1 className='text-primary-key text-xl m-8 uppercase'>
				This page does not exist!
			</h1>
			<Link href='/'>
				<button className='bg-primary-key px-4 py-2 text-on-primary-key rounded-3xl hover:bg-on-primary duration-300 hover:scale-105'>
					Back to home
				</button>
			</Link>
		</div>
	</div>;
}
