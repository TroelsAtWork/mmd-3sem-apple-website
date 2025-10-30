"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        <li>
          {/* <Link href="/iwatch" className=`${pathname === "/iwatch" ? "underline" : ""}`>iWatch</Link> */}
          <Link
            href="/iwatch"
            className={pathname === "/iwatch" ? "underline" : ""}
          >
            iWatch
          </Link>
        </li>
        <li>
          <Link
            href="/imac"
            className={pathname === "/imac" ? "underline" : ""}
          >
            iMac
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
