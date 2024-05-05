import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import WorthitAppImg from "../assets/images/worthit-app.png";
import { Menu } from "@geist-ui/icons";
import ComingSoonImg from "../assets/images/comingsoon.png";
import { X } from "@geist-ui/icons";
import { Grid } from "@geist-ui/icons";
import { Info } from "@geist-ui/icons";
import { Code } from "@geist-ui/icons";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <div className="w-[90vw] h-20 flex justify-between items-center relative">
      <h1>calculate.</h1>
      <div className="lg:hidden z-50">
        {mobileNav ? (
          <X
            onClick={handleMobileNav}
            className={`z-50 ${mobileNav ? "stroke-black" : "stroke-black"}`}
          />
        ) : (
          <Menu
            onClick={handleMobileNav}
            className={`z-50 ${mobileNav ? "stroke-black" : "stroke-black"}`}
          />
        )}
      </div>

      <div className="hidden lg:flex justify-center items-center gap-12 ">
        <div className="dropdown dropdown-hover ">
          <div tabIndex={0} role="button" className=" m-1">
            calculators.
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu shadow-xl bg-[#f7f7f7] rounded-box w-[350px] p-4 grid grid-cols-2 justify-center gap-4 items-center"
          >
            <Link to="/worthit">
              <Card isFooterBlurred radius="lg" className="border-none w-36">
                <Image
                  alt="worhit img"
                  className="object-cover"
                  height={200}
                  src={WorthitAppImg}
                  width={200}
                />
                <CardFooter className="justify-center bg-green-700 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                  <h1 className="text-white">worthit.</h1>
                </CardFooter>
              </Card>
            </Link>

            <Link to="/screentime">
              <Card isFooterBlurred radius="lg" className="border-none w-36">
                <Image
                  alt="worhit img"
                  className="object-cover"
                  height={200}
                  src={ComingSoonImg}
                  width={200}
                />
                <CardFooter className="justify-center bg-[#333] overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                  <h1 className="text-white">screentime.</h1>
                </CardFooter>
              </Card>
            </Link>

            <Link to="/bmi">
              <Card isFooterBlurred radius="lg" className="border-none w-36">
                <Image
                  alt="worhit img"
                  className="object-cover"
                  height={200}
                  src={ComingSoonImg}
                  width={200}
                />
                <CardFooter className="justify-center bg-[#333] overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                  <h1 className="text-white">bmi.</h1>
                </CardFooter>
              </Card>
            </Link>
          </ul>
        </div>

        <h3>about</h3>
        <h3>how did i make this?</h3>
      </div>

      <div
        className={`z-10 fixed bg-[#efefef] shadow-2xl rounded-xl h-screen duration-200 top-0 w-[100vw] ${
          mobileNav ? "right-0 " : "right-[-100%]"
        }`}
      >
        {/* Mobile */}
        <div className="h-full flex justify-center items-center">
          <div className="dropdown dropdown-hover flex flex-col justify-center items-start h-full gap-12">
            <div
              tabIndex={0}
              role="button"
              className="text-xl flex justify-center items-center gap-5"
            >
              <Grid size={22} /> calculators.
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu shadow-xl bg-[#f7f7f7] rounded-box w-[350px] p-4 grid grid-cols-2 justify-center gap-4 items-center"
            >
              <Link to="/worthit">
                <Card isFooterBlurred radius="lg" className="border-none w-36">
                  <Image
                    alt="worhit img"
                    className="object-cover"
                    height={200}
                    src={WorthitAppImg}
                    width={200}
                  />
                  <CardFooter className="justify-center bg-green-700 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <h1 className="text-white">worthit.</h1>
                  </CardFooter>
                </Card>
              </Link>

              <Link to="/screentime">
                <Card isFooterBlurred radius="lg" className="border-none w-36">
                  <Image
                    alt="worhit img"
                    className="object-cover"
                    height={200}
                    src={ComingSoonImg}
                    width={200}
                  />
                  <CardFooter className="justify-center bg-[#333] overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <h1 className="text-white">screentime.</h1>
                  </CardFooter>
                </Card>
              </Link>

              <Link to="/bmi">
                <Card isFooterBlurred radius="lg" className="border-none w-36">
                  <Image
                    alt="worhit img"
                    className="object-cover"
                    height={200}
                    src={ComingSoonImg}
                    width={200}
                  />
                  <CardFooter className="justify-center bg-[#333] overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <h1 className="text-white">bmi.</h1>
                  </CardFooter>
                </Card>
              </Link>
            </ul>
            <h3 className="text-xl flex justify-center items-center gap-5">
              <Info size={22} /> about
            </h3>
            <h3 className="text-xl flex justify-center items-center gap-5">
              <Code size={22} />
              how did i make this?
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
