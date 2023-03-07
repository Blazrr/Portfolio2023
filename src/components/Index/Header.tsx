import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="absolute bottom-52">
      <h1 className="text-3xl font-extrabold tracking-wide  md:text-5xl lg:text-6xl">
        Hello, I&apos;m Sami, <br /> a French Developer <br /> based in{" "}
        <span className="text-transparent  bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
          France
        </span>
      </h1>
    </div>
  );
};

export default Header;
