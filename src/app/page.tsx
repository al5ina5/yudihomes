'use client';

import { ContactBanners } from './components/ContactBanners';

import classNames from 'classnames';
import SideScroll from '../components';
import { motion } from 'framer-motion';

export default function IndexPage() {
	return (
		<>
			<ContactBanners />
			<div className="max-w-7xl mx-auto flex-col lg:flex-row flex items-center justify-center md:gap-12 md:mt-24 md:mb-48">
				<div className="relative flex-1 p-12 space-y-8">
					{/* <i className="fas fa-home text-3xl" /> */}
					<p className="relative text-5xl md:text-7xl font-extralight font-sans">
						Find your perfect Florida home with{' '}
						<span className="inline-block font-serif">
							Yudi Homes
						</span>
						.
					</p>
					<p className="text-2xl font-medium opacity-75">
						Deserunt ut cupidatat laborum laborum irure. Eu
						reprehenderit duis cupidatat esse nulla amet velit sint
						proident amet esse.
					</p>
					<a className="inline-block text-2xl rounded bg-neutral-800 text-teal-200 p-4 px-8">
						Get Started
					</a>
				</div>
				<motion.div
					animate={{ rotate: ['-1deg', '1deg', '-1deg'] }}
					transition={{ duration: 8, loop: Infinity }}
					className="w-full max-w-2xl mx-auto bg-white md:rounded-2xl mt-28 shadow-2xl"
				>
					<div className="">
						<div className="flex flex-col md:flex-row gap-12 p-12">
							<div
								className="relative -mt-28 w-60 h-60 bg-red-400 rounded-2xl bg-cover border-8 border-white outline outline-offset-0 outline-teal-200 outline-8 mx-auto"
								style={{
									backgroundImage: 'url("/img/portrait.jpg")',
								}}
							>
								<div className="-mt-3 -mr-3 animate-pulse w-8 h-8 absolute right-0 rounded-full bg-green-500 shadow border-4 border-white" />
							</div>
							<div className="space-y-2">
								<p className="text-3xl">Yudimar DeJesus</p>
								<p className="text-md opacity-75 font-medium">
									Real Estate Agent, Property Management
									Specialist
								</p>
								<div className="space-x-1">
									{new Array(5).fill(0).map(() => (
										<i
											className={classNames('fa fa-star')}
										/>
									))}
								</div>
							</div>
						</div>
						<div className="p-12 pt-0 border-b-8 border-teal-200">
							<div className="grid grid-cols-3 gap-4 text-center text-2xl font-medium">
								<a
									href="mailto:info@yudi.homes"
									className="bg-neutral-100 text-neutral-600 p-3 px-8 rounded-lg col-span-3  md:col-span-1"
								>
									<i className="fas text-sm fa-envelope mr-3"></i>
									<span className="align-middle">Email</span>
								</a>
								<a
									href="tel:2392901101"
									className="flex-1 bg-teal-200 text-teal-800 p-3 rounded-lg  align-middle col-span-3  md:col-span-2"
								>
									<i className="fas text-sm fa-phone mr-3"></i>
									<span className="align-middle">Call</span>
								</a>
							</div>
						</div>
						<div className="space-y-6 p-12">
							<p className="text-2xl opacity-95 font-medium">
								Yudi helps families, veterans, investors, and
								first-time home-buyers by{' '}
								<b>making the difficult part easy</b> in
								acquiring your next home.
							</p>
							<p className="text-lg opacity-75 font-medium">
								With over 23 years of experience, Yudi has been
								serving the Southwest Florida region for people
								from all backgrounds for over 8 years. By
								investing time into providing proven advice and
								market insights to inform your next purchase,
								you can remain safe and confident on your next
								move.
							</p>
							<p className="text-lg opacity-75 font-medium">
								<a
									href=""
									className="underline hover:no-underline"
								>
									It's time for you to take advantage. &rarr;
								</a>
							</p>
						</div>
					</div>
				</motion.div>
			</div>
			{/* <img src="/img/seashells.png" alt="" /> */}
			<div>
				<div className="grid grid-cols-1 lg:grid-cols-2">
					<div
						className="h-96 md:h-auto bg-cover bg-center"
						style={{ backgroundImage: 'url("/img/home.jpeg")' }}
					></div>
					<div className="p-12 md:p-24 space-y-8 bg-teal-300">
						<p className="text-4xl font-serif">
							Helping first time home-buyers and veterans find the
							perfect place for the next chapter of their lives.
						</p>
						<p className="text-xl font-medium opacity-75">
							Eiusmod magna sit laborum pariatur nisi do laboris
							veniam. Amet officia cupidatat irure ex sunt. Irure
							eu enim amet eu Lorem.
						</p>
						<p className="text-lg opacity-50">
							Minim irure laboris ullamco est aute reprehenderit
							pariatur culpa incididunt duis laboris. Aliquip
							nulla dolor nostrud eu ex officia commodo ad sit
							nostrud nulla esse esse proident. Elit excepteur ea
							id ullamco magna occaecat.
						</p>
						<a className="inline-block text-2xl rounded bg-neutral-800 text-teal-200 p-4 px-8">
							Get Started
						</a>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 bg-teal-400">
					<div className="p-12 md:p-24 space-y-8 ">
						<p className="text-4xl font-serif">
							Ensuring investors get their monies worth with
							reliable property management services.{' '}
						</p>
						<p className="text-xl font-medium opacity-75">
							Dolore Lorem non nulla commodo quis labore sit
							officia. Elit sit velit nisi adipisicing. Et enim
							mollit fugiat anim nisi Lorem labore nisi. Aute sunt
							ad ex ea do pariatur nulla id laboris id ad eu.
						</p>
						<p className="text-lg opacity-50">
							Quis consectetur officia amet reprehenderit nostrud
							cupidatat dolore ut velit quis ea Lorem non. Eu
							laborum do sunt ea enim dolor ut. Aute aliqua id
							fugiat amet excepteur laborum. Non dolor deserunt ea
							commodo non adipisicing labore anim cillum laboris
							minim. Aliqua aliqua nulla ullamco aute aute culpa
							ullamco. Magna incididunt mollit officia excepteur
							cupidatat amet cillum esse.
						</p>
						<a className="inline-block text-2xl rounded bg-neutral-800 text-teal-200 p-4 px-8">
							Get Started
						</a>
					</div>
					<div
						className="h-96 md:h-auto bg-cover bg-center order-first md:order-last"
						style={{
							backgroundImage: 'url("/img/home-2.webp")',
						}}
					></div>
				</div>
			</div>
			<div className="grid text-sm md:text-base grid-cols-2 md:grid-cols-4">
				<div className="p-6 md:p-12 bg-teal-200 font-light opacity-75">
					Consectetur laborum irure dolor cupidatat id ea laboris
					incididunt incididunt nulla adipisicing tempor mollit velit.
				</div>
				<div className="p-6 md:p-12 bg-teal-300 font-light opacity-75">
					Consectetur laborum irure dolor cupidatat id ea laboris
					incididunt incididunt nulla adipisicing tempor mollit velit.
				</div>
				<div className="p-6 md:p-12 bg-teal-400 font-light opacity-75">
					Consectetur laborum irure dolor cupidatat id ea laboris
					incididunt incididunt nulla adipisicing tempor mollit velit.
				</div>
				<div className="p-6 md:p-12 bg-teal-500 font-light opacity-75">
					Consectetur laborum irure dolor cupidatat id ea laboris
					incididunt incididunt nulla adipisicing tempor mollit velit.
				</div>
			</div>

			<div className="p-6 flex">
				{/* <p>{new Date().getFullYear()} &copy; Yudi Homes</p> */}
				<p className="flex-1"></p>
				<p className="uppercase opacity-25">
					{new Date().getFullYear()} &copy; Yudi Homes
				</p>
			</div>
			<ContactBanners />
		</>
	);
}
