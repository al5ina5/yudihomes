import React from 'react';
import Marquee from 'react-fast-marquee';
import classNames from 'classnames';

interface SideScrollProps {
	children: any;
	className?: string;
	direction?: 'left' | 'right' | 'up' | 'down';
	speed?: number;
}

export default function SideScroll({
	children,
	className,
	direction,
	speed,
}: SideScrollProps) {
	return (
		<div
			className={classNames(
				className,
				'w-full bg-teal-300 text-teal-800 uppercase p-2 text-sm font-medium'
			)}
		>
			<Marquee {...{ direction, speed }}>
				{new Array(100).fill(100).map(() => (
					<>{children} &nbsp;&nbsp;&nbsp;&nbsp;</>
				))}
			</Marquee>
		</div>
	);
}
