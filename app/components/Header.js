import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <strong>
        <Link href="/">Azenael</Link>
      </strong>
      <nav>
        <Link href="/">Main</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
