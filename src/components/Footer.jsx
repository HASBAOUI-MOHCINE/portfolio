import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const socials = [
    { icon: faGithub, link: "https://github.com/HASBAOUI-MOHCINE" },
    { icon: faFacebook, link: "https://www.facebook.com/mohcine.hasbaoui1/" },
    { icon: faInstagram, link: "https://www.instagram.com/mh7__x" },
    { icon: faEnvelope, link: "mailto:hasbaouimohcin12@gmail.com" },
  ];

  return (
    <footer className=" backdrop-blur-md py-12 mt-12">
      <p className="text-center text-gray-500 mb-6">
        Let's connect and create something amazing together
      </p>
      <div className="flex justify-center gap-6 mb-6">
        {socials.map((social, i) => (
          <a
            key={i}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center hover:scale-110 transition-transform"
          >
            <FontAwesomeIcon icon={social.icon} className="text-xl" />
          </a>
        ))}
      </div>
      <p className="text-center text-gray-400 text-sm">
        © 2025 Mohcine Hasbaoui. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
