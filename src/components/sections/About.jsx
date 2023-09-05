import React, { useState } from "react";
import BannerImg from "../../assets/about.png";
import Education from "../Education";
import Experience from "../Experience";
import Skills from "../Skills";
import Border from "../common/Border";
import Tab from "../common/Tab";
import Tabs from "../common/Tabs";

export default function About() {
    const [active, setActive] = useState(0);

    const handleChange = (newActive) => setActive(newActive);

    return (
        <section className=" bg-white relative ">
            <div className=" lg:container mx-auto px-10 md:px-16 xl:px-20  py-8 lg:gap-8 xl:gap-0 lg:py-16 sm:grid sm:grid-cols-12">
                <div className="lg:mt-0 sm :col-span-6 sm:pr-14 z-10">
                    <img
                        className="object-cover block my-[80px] sm:my-[120px] mr-0 ml-auto"
                        src={BannerImg}
                        alt="banner"
                    />
                </div>
                <div className="mr-auto place-self-center lg:col-span-6 z-10">
                    <h1 className="mb-4 text-[24px] text-secondary">
                        About Me
                    </h1>
                    <h2 className="mb-4 text-[40px] text-accent leading-none ">
                        Small Talk <br />
                    </h2>
                    <Border />

                    <div className="mt-16">
                        <p className=" leading-8">
                            From checkout to global sales tax compliance,
                            companies around the world use Flowbite to simplify
                            their payment stack.
                        </p>
                    </div>
                    <div className="my-8">
                        <Tabs active={active} onChange={handleChange}>
                            <Tab title="Skills">
                                <Skills />
                            </Tab>
                            <Tab title="Experience">
                                <Experience />
                            </Tab>
                            <Tab title="Education">
                                <Education />
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
}
