//"use client"; // pour mentionner à next que cette component est une "client component" et pas une "server component" hitach f had lcomponent derna la proprieté "onClick" li kat7taj une interaction avec lclient (çàd l'user) dkchi 3lach on a declarer cette component comme une "client component" (en utilisant "use client") hitach il madernahach ghadi itle3 lina error, Mais on remarque ici que reje3na cette Navbar "client component" ghir bsbab wa7ed lbutton sghir li fih "onClick" donc khsserna lmiza dyl "server component" ghir bsbab lbutton dyl logOut, donc Next ja b wa7ed solution zwina li hia n7ewlo ghir une partie du code li hia tkoun client dans ce cas ghadi n7ewlo ghir lbutton "LogOut" howa li ikoun client-side bach néassurew l'interactivite donc la solution hiya n9ado component dyl Buttons lighadi koun fiha lbutton logOut ou hia li nrej3ouha "client component"

import Link from "next/link";
import styles from "./Navbar.module.css";
import { links } from "./data";
import Button from "../../elements/Button/Button";
import Logo from "@/elements/Logo/Logo";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

function Navbar() {
  return (
    <div className={styles.container}>

        <Logo/>

        <div className={styles.links}>
          <DarkModeToggle/>
          {links.map((link) => 
              <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
          )}
          <Button/>
        </div>

    </div>
  );
};

export default Navbar;