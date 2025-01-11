import React, { useRef } from "react";

const Todol = () => {
  const focusNav = useRef(null);
  const navLinks = [
    { text: "HOME", href: "#home" },
    { text: "ABOUT", href: "#about" },
    { text: "CONTACT", href: "#contact" },
    { text: "SERVICE", href: "#service" },
  ];
  const focuLink = useRef(null);
  const focusLink = () => {
    focusLink.current.active = true;
  };
  return (
    <div className="flex w-full justify-between h-11 bg-gray-500 p-4 py-8 items-center ">
      {navLinks.map(({ text, href }, key) => {
        return (
          <a
            onClick={() => focusLink}
            ref={focuLink}
            href={href}
            key={key}
            className="hover:border-b-2 border-blue-950 transition-transform font-bold active:text-white"
          >
            {text}
          </a>
        );
      })}
    </div>
  );
};

export default Todol;
