import React from "react";
import BannerImg from "../../assets/banner.png";
import Button from "../common/Button";
import Social from "../common/Social";

const Hero = () => {
    return (
        <section className=" bg-gray-100 relative ">
            <div className=" lg:container mx-auto px-10 md:px-16 xl:px-20 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className=" absolute top-0 right-0 h-full w-[70%] xl:w-[72%] 2xl:w-[66.5%] bg-[#9FC5C8] opacity-50 z-0"></div>
                <div className="mr-auto place-self-center lg:col-span-6 z-10">
                    <h1 className="mb-4 text-[26px] xl:text-[32px] text-secondary">
                        Hello I am
                    </h1>
                    <h2 className="mb-4 text-[46px] xl:text-[72px] text-accent leading-none">
                        Tahira <span className=" text-primary">Jannat</span>
                    </h2>
                    <h3 className="mb-8 text-base text-accent">
                        Professional freelancer & Web Developer
                    </h3>
                    <p className=" leading-8">
                        From checkout to global sales tax compliance, companies
                        around the world use Flowbite to simplify their payment
                        stack.
                    </p>

                    <Button children={"Hire me"} styles="mt-10 xl:mt-20" />

                    <div className=" mt-8 xl:mt-14 ">
                        <Social />
                    </div>
                </div>
                <div className="lg:mt-0 col-span-6 pr-14 z-10">
                    <img
                        className="object-cover block my-[80px] xl:my-[120px] mr-0 ml-auto"
                        src={BannerImg}
                        alt="banner"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
