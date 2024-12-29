import "aos/dist/aos.css";

import React, { useEffect } from "react";

import AOS from "aos";
import image2 from "../Assets/wavy.png";

export const Hero = () => {
	useEffect(() => {
		AOS.init({ duration: 3000 });
	}, []);

	return (
		<section className="flex flex-col justify-center items-center gap-8 lg:grid grid-cols-2 second-background h-[800px] md:h-[600px] border-t border-xl border-red-500 max-w-7xl mx-auto">
			<div className="flex flex-col justify-center items-center">
				<div className="flex items-center justify-center text-center p-2 ">
					<h1 className="text-3xl md:text-5xl font-bold">
						Improve your shopping <span className="urua-text">experience</span>{" "}
						with<span className="urua-text"> - Urua</span>
					</h1>
				</div>

				<div className="rounded-br-3xl text-white p-4 md:p-12 flex flex-col justify-center mt-4 mb-8 urua">
					<p className="lg:text-lg font-semibold">
						Discover Urua, your ultimate virtual supermarket! <br />
						From everyday essentials to indulgent treats, we offer an unmatched
						variety of items tailored to satisfy your every need and desire —
						all in one seamless shopping experience.
					</p>
				</div>

        <div className='px-4 lg:px-12 flex flex-col md:flex-row gap-4 lg:gap-8'>
          <button className='urua text-white px-8 py-2 rounded-br-md'><a href="https://play.google.com/store/apps/details?id=com.uruaafrica">Start Shopping!</a></button>
          <button className='urua-border px-8 py-2 border urua-text rounded-br-md'><a href="https://play.google.com/store/apps/details?id=com.uruaafrica">Download Urua</a></button>        </div>
      </div>

			<div className=" flex justify-center items-center">
				<div className="text-center">
					<img
						src={image2}
						alt=""
						className="w-5/6 md:w-full md:h-96"
						data-aos="fade-up"
					/>
				</div>
			</div>
		</section>
	);
};
