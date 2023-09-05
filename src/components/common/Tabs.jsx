import React from "react";

export default function Tabs({ active, onChange, children }) {
    return (
        <>
            <div className="border-b-2 pb-2">
                {children.map((menu, index) => (
                    <a
                        key={index}
                        onClick={() => onChange(index)}
                        className={
                            active === index
                                ? "border-b-2 border-primary py-3 px-2 lg:px-4 mb-4"
                                : " mx-4 lg:mx-6  inline  cursor-pointer"
                        }
                        style={{
                            width: 100,
                        }}
                    >
                        {menu.props.title}
                    </a>
                ))}
            </div>
            <div className=" sm:h-80">{children[active]}</div>
        </>
    );
}
