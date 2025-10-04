import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex gap-4 md:flex-nowrap justify-between px-10 py-8">
      <div className="flex flex-col gap-4">
        <p>
          © {new Date().getFullYear()} · hashedalgorithm · All rights reserved
        </p>
      </div>
      <div className="flex ">
        <p>
          Created by{" "}
          <span className="underline">
            <Link href={"https://github.com/hashedalgorithm"}>
              hashedalgorithm
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
