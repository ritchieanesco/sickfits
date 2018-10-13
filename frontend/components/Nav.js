import Link from "next/link";

const Nav = () => (
  <div>
    <Link href="/sell">
      <a>Go to Sell!</a>
    </Link>
    <Link href="/">
      <a>Go to Home</a>
    </Link>
  </div>
);

export default Nav;
