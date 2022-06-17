import { useState } from "react";
import { useEffect } from "react";
import styles from "./BaseLayout.module.css";
import Header from "../Header";
import Link from "next/link";
import { useRouter } from "next/router";

const BaseLayout = (props) => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState();
  const [currentPageSection, setCPS] = useState();
  const [showNav, setShowNav] = useState(false);
  const [isCrossed, setIsCrossed] = useState(false);

  useEffect(() => {
    console.log("path name", router.pathname);
    const urls = router.pathname.split("/");
    const firstPath = urls[1];
    console.log(urls);
    console.log(firstPath);
    setCPS(firstPath);
    //get last element in the path that would determine what navs would be shown
    setActiveLink(urls[urls.length - 1]);
  }, [router.pathname]);

  function handleToggleNav() {
    setShowNav(!showNav);
    setIsCrossed(!isCrossed);
  }

  const navs = [
    { name: "Dashboard", link: `/${currentPageSection}/dashboard`, icon: "home-alt", page: "brand" },
    { name: "Team", link: `/${currentPageSection}/team`, icon: "shout-link-2", page: "brand" },
  ];
  return (
    <div className={styles.container + " scroll_hide"}>
      <nav className={styles.sidebar + ` border-r border-b border-gray-light p-[16px] md:pr-[44px] ${showNav ? "block" : "hidden md:block"}`}>
        <img className="w-[100px] h-[32px] mb-[40px] ml-[40px] hidden md:block" src="/Shout Logo.svg" />

        <ul className={styles.nav}>
          {navs.map((nav, i) => {
            return (
              <>
                {router.pathname.includes(nav.page) && (
                  <Link href={nav.link} key={i}>
                    <li
                      onClick={() => {
                        setActiveLink(nav.link);
                        handleToggleNav();
                      }}
                      className={styles.nav__item + ` hover:bg hover:bg-hover-color--1 ${router.pathname.includes(nav.link) ? "text-primary bg-gray-100" : ""}`}
                    >
                      <span className={`icon-${nav.icon} text-[16px] mr-[9px]`}></span>
                      <span className="body_light">{nav.name}</span>
                    </li>
                  </Link>
                )}
              </>
            );
          })}
        </ul>
      </nav>
      <section className={`${styles.section}`}>
        <Header toggleNav={handleToggleNav} isCrossed={isCrossed} />
        <main className="mt-[56px] md:mt-0 h-screen scroll_hide overflow-scroll">{props.children}</main>
      </section>
    </div>
  );
};

export default BaseLayout;
