import React from "react";
import Image1 from "../../assets/work-1.png";
import Image2 from "../../assets/work-2.png";
import Image3 from "../../assets/work-3.png";
import Border from "../common/Border";

export default function LatestWorks() {
    const gallery = [
        { image: Image1 },
        { image: Image2 },
        { image: Image3 },
        { image: Image1 },
        { image: Image2 },
        { image: Image3 },
    ];

    return (
        <div className="bg-white">
            <div className="lg:container mx-auto px-10 md:px-16 xl:px-20 py-20 sm:grid sm:grid-cols-12 gap-4 lg:gap-4 xl:gap-8">
                <div className="col-span-12 md:col-span-6 xl:pr-20">
                    <h1 className="mb-4 text-[18px] xl:text-[24px] text-secondary">
                        Latest Works
                    </h1>
                    <h2 className="mb-4 text-[30px] sm:text-[32px] xl:text-[40px] text-accent leading-none">
                        Made With Pride.
                    </h2>
                    <Border />
                    <div className=" mt-10 xl:mt-16">
                        <p className=" leading-6 xl:leading-8 block sm:hidden min-[900px]:block lg:block text-[17px]  lg:text-lg">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummynibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                        </p>
                    </div>
                </div>
                {gallery.map((data, index) => (
                    <div
                        key={index}
                        className="col-span-4 md:col-span-3 my-4 md:my-0"
                    >
                        <img
                            src={data.image}
                            alt=""
                            srcSet=""
                            className="object-cover w-full"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
