"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { SignInButton, useUser } from "@clerk/nextjs";

export default function ProfileButton() {
	const [userId, setUserId] = useState<string | null>(null);
	const user = useUser();
	useEffect(() => {
		if (user.isSignedIn) {
			setUserId(user.user?.id);
		}
	}, [user]);
	return (
		<>
			{userId && (
				<Link
					href={`/user-profile/${userId}/favorites`}
					className='hidden lg:block'>
					<div className='relative group'>
						<span className='text-white/80 hover:text-white font-medium transition-all duration-300 cursor-pointer relative px-3 py-2 rounded-lg hover:bg-white/5 backdrop-blur-sm'>
							Profile
							<div className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-yellow-400 group-hover:w-full transition-all duration-300' />
						</span>
					</div>
				</Link>
			)}

			{!userId && (
				<SignInButton mode='modal'>
					<div className='relative group'>
						<span className='text-white/80 hover:text-white font-medium transition-all duration-300 cursor-pointer relative px-3 py-2 rounded-lg hover:bg-white/5 backdrop-blur-sm'>
							Profile
							<div className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-yellow-400 group-hover:w-full transition-all duration-300' />
						</span>
					</div>
				</SignInButton>
			)}
		</>
	);
}
