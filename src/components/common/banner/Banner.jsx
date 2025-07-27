import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function Banner({ src, header, text, buttonName }) {
	return (
		<div className="flex justify-between p-4">
			<div className="space-y-4 w-1/2">
				<h2 className="text-4xl h2-gradient-text leading-14 font-bold">
					{header}
				</h2>
				<p>{text}</p>
				<Button className="button-gradient">{buttonName}</Button>
			</div>
			<Image src={src} width={400} height={400} alt={src} />
		</div>
	);
}

export default Banner;
