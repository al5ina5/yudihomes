import React from 'react';
import SideScroll from '../../components';

export function ContactBanners({}) {
	return (
		<>
			<SideScroll speed={10}>
				<a href="" className="underline hover:no-underline">
					info@yudi.homes
				</a>
			</SideScroll>
			<SideScroll
				className="border-t-2 border-teal-200"
				direction="right"
				speed={10}
			>
				<a href="" className="underline hover:no-underline">
					239 290 1101
				</a>
			</SideScroll>
		</>
	);
}
