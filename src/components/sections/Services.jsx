import React from "react";
import Service1 from "../../assets/service-1.png";
import Border from "../common/Border";

export default function Services() {
    const service = [
        {
            image: Service1,
            service: "UI/UX Design",
            description:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummynibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
        },
        {
            image: Service1,
            service: "UI/UX Design",
            description:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummynibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
        },
        {
            image: Service1,
            service: "UI/UX Design",
            description:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummynibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
        },
        {
            image: Service1,
            service: "UI/UX Design",
            description:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummynibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
        },
        {
            image: Service1,
            service: "UI/UX Design",
            description:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummynibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
        },
        {
            image: Service1,
            service: "UI/UX Design",
            description:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummynibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
        },
    ];

    return (
        <div className="bg-gray-100">
            <div className="lg:container mx-auto px-10 md:px-16 xl:px-20 py-20 sm:grid sm:grid-cols-12">
                <div className=" col-span-6">
                    <h1 className="mb-4 text-[24px] text-secondary">
                        What I Offer
                    </h1>
                    <h2 className="mb-4 text-[40px] text-accent leading-none ">
                        Affordable Services
                    </h2>
                    <Border />

                    <div className="mt-16">
                        <p className=" leading-8">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummynibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                        </p>
                    </div>
                </div>
                <div className="col-span-12 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
                    {service.map((data, index) => (
                        <div
                            className="col-span-3 md:col-span-1 bg-white shadow-lg p-6 my-6 md:my-0"
                            key={index}
                        >
                            <img src={data.image} alt="" />
                            <h2 className="my-4 text-[24px] text-accent">
                                {" "}
                                {data.service}{" "}
                            </h2>
                            <p>{data.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
