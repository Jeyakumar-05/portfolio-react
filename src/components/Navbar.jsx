import React, { useState, useRef, useEffect } from "react";
import { CircleUser, CircleX, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import "../assets/css/style.css";

const Navbar = () => {
  const navdata = [
    { title: "Profile", path: "/profile" },
    { title: "Project", path: "/projects" },
    { title: "Contact", path: "/contact" },
  ];

  const nameref = useRef(null);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const newnameValue = nameref.current.value;
    setName(newnameValue);
    localStorage.setItem("name", newnameValue);
  };

  return (
    <>
      <div className="h-[4rem] w-full flex justify-between items-center rounded-md bg-white border border-gray-400 px-4 lg:px-10">
        <div className="h-full flex items-center font-medium pinktext text-2xl lg:text-4xl">
          <h2>{name ? name : "JEYAKUMAR S"}</h2>
        </div>
        <div className="hidden lg:flex w-[45%] h-full items-center justify-end">
          <ul className="list-none flex items-center gap-10">
            {navdata.map((data, index) => (
              <NavLink key={index} to={data.path} className="hover:opacity-60">
                <li className="text-xl navtext font-semibold">{data.title}</li>
              </NavLink>
            ))}
            <div className="navtext">
              <CircleUser onClick={() => setVisible(true)} size={35} />
            </div>
          </ul>
        </div>
        <div className="lg:hidden">
          <Menu onClick={() => setMenuOpen(!menuOpen)} size={35} />
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden absolute top-[4rem] left-0 w-full bg-white shadow-lg z-50">
          <ul className="h-full w-full list-none flex items-center gap-10 justify-end">
            {navdata.map((data, index) => (
              <NavLink
                key={index}
                to={data.path}
                className={({ isActive }) =>
                  `h-[60%] w-[15%] flex items-center justify-center hover:opacity-60 p-5 ${
                    isActive ? "text-2xl font-bold" : "text-xl"
                  }`
                }
              >
                <li className="navtext font-semibold">{data.title}</li>
              </NavLink>
            ))}
            <div className="w-[10%] h-full flex justify-end items-center navtext">
              <li>
                <CircleUser onClick={() => setVisible(true)} size={35} />
              </li>
            </div>
          </ul>
        </div>
      )}

      {visible && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/20 flex justify-center items-center z-50">
          <div className="h-[35%] w-[80%] md:w-[40%] lg:w-[30%] bg-white shadow-lg flex flex-col rounded-md">
            <div className="w-full h-[18%] flex flex-row justify-between px-10 items-center border-b-2 text-gray-600 text-xl font-bold">
              <div>Profile</div>
              <CircleX onClick={() => setVisible(!visible)} />
            </div>
            <div className="w-full h-[68%] flex flex-col justify-center items-center p-4">
              <form
                className="w-full flex flex-col gap-4"
                onSubmit={handleLogin}
              >
                <input
                  type="text"
                  ref={nameref}
                  placeholder="Name"
                  className="p-3 bg-[#f8f8f8] w-full font-bold outline-none border focus:border-b-2 hover:border-gray-500 text-gray-600"
                  required
                />
                <button
                  type="submit"
                  className=" active p-2 text-white w-full rounded-sm text-lg font-bold"
                >
                  Update Name
                </button>
              </form>
            </div>
            <div className="w-full h-[18%] flex justify-center items-end">
              <button
                onClick={() => setVisible(!visible)}
                className="bg-gray-600 p-3 text-white w-full rounded-sm text-lg font-bold"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
