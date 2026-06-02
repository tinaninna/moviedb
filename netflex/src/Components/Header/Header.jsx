import { useEffect, useState } from "react";
import logo from "../../assets/image/logo.png";
import { AiOutlineSearch, AiOutlineBell, AiOutlineUser } from "react-icons/ai";
import { MdOutlineExpandMore } from "react-icons/md";
import styles from "./Header.module.css";

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // for blur
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* logo */}
        <img className={styles.logo} src={logo} alt="Logo" />

        {/* navigation links */}
        <nav className={styles.nav}>
          <a className={styles.navLink} href="#/">
            Home
          </a>
          <a className={styles.navLink} href="#/tv-shows">
            Tv Shows
          </a>
          <a className={styles.navLink} href="#/movies">
            Movies
          </a>
          <a className={styles.navLink} href="#/new-popular">
            New & Popular
          </a>
          <a className={styles.navLink} href="#/my-list">
            My List
          </a>
          <a className={styles.navLink} href="#/browse-language">
            Browse by Language
          </a>
        </nav>

        {/* right side section */}
        <div className={styles.rightSection}>
          {/* search */}
          <div className={styles.searchContainer}>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={styles.searchButton}
            >
              <AiOutlineSearch size={20} />
            </button>

            {isSearchOpen && (
              <input
                type="text"
                placeholder="movie title"
                className={styles.searchInput}
              />
            )}
          </div>

          {/* notifications */}
          <button className={styles.iconButton}>
            <AiOutlineBell size={20} />
            <span className={styles.notificationBadge}>4</span>
          </button>

          {/* profile */}
          <div className={styles.profileContainer}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className={styles.profileButton}
            >
              {/* user icon */}
              <div className={styles.profileAvatar}>
                <AiOutlineUser size={20} />
              </div>
              {/* dropdown icon */}
              <MdOutlineExpandMore size={20} />
            </button>

            {isProfileOpen && (
              <div className={styles.profileMenu}>
                <a className={styles.profileMenuItem} href="#/">
                  Account
                </a>
                <a className={styles.profileMenuItem} href="#/">
                  help Center
                </a>
                <hr className={styles.profileMenuDivider} />
                <button className={styles.profileMenuItem}>Sign Out</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
