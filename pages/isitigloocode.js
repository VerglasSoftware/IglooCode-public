import { Red_Hat_Mono } from "@next/font/google";
import React from "react";
const red_hat_mono = Red_Hat_Mono({ subsets: ["latin"] });

function IsItIglooCode() {
	var inputDate = new Date("03/26/2024");
	var todaysDate = new Date();
	if(inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
		return (
			<div className="grid h-screen place-items-center w-screen">
				<marquee className="w-screen text-xl">yes</marquee>
			</div>
		);
	}
	return (
		<div className="grid h-screen place-items-center w-screen">
			<marquee className="w-screen text-xl">no</marquee>
		</div>
	);
}

export default IsItIglooCode;
