import "./Header.css";
import { useState, useEffect } from "react";
import { GrClose, GrMenu, GrSun } from "react-icons/gr";
import { RiMoonLine } from "react-icons/ri";
import { LiHeader, Button } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../features/darkModeSlice";
import { useLocation } from "react-router-dom";

const Header = () => {
  // Hämta den aktuella rutplatsen (URL)
  const location = useLocation();
  // useState för att visa/dölja modalen
  const [showModal, setShowModal] = useState(false);
  // Hämta aktuellt tema från Redux
  const { mode } = useSelector((state) => state.darkMode);
  // Dispatch-funktion för att ändra temat
  const dispatch = useDispatch();

  // Effekt för att ändra kroppens klass beroende på aktuellt tema
  useEffect(() => {
    document.body.classList.remove(mode === "light" ? "dark" : "light");
    document.body.classList.add(mode);
  }, [mode]);

  // Hantera öppnandet/stängandet av modalen
  const handleToggleModal = () => {
    setShowModal(!showModal);
  };
  // Hantera stängandet av modalen
  const handleCloseModal = () => {
    setShowModal(false);
  };
  // Hantera växling av mörkt/ljust tema
  const handleDarkModeToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <>
      <header className="d-flex container">
        {/* Knapp för att öppna Menu */}
        <button
          className="menu d-flex"
          onClick={handleToggleModal}
          aria-label="menu"
        >
          <GrMenu />
        </button>
        <div></div>
        {/* Navigationssektion */}
        <nav>
          <ul className="d-flex">
            {/* Varje navigationslänk har en LiHeader-komponent som hanterar stilar och aktiveringsstatus baserat på den aktuella rutplatsen */}
            <LiHeader
              title="Home"
              link="/"
              className={location.pathname === "/" ? "active" : ""}
            />
            <LiHeader
              title="About Me"
              link="/about"
              className={location.pathname === "/about" ? "active" : ""}
            />
            <LiHeader
              title="Resume"
              link="/resume"
              className={location.pathname === "/resume" ? "active" : ""}
            />
            <LiHeader
              title="Contact"
              link="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            />
          </ul>
        </nav>
        {/* Knapp för att växla mellan ljust och mörkt tema */}
        <button
          onClick={handleDarkModeToggle}
          className="mode d-flex"
          aria-label="darkMode"
        >
          {mode === "light" ? (
            <span className="sun d-flex">
              <GrSun />
            </span>
          ) : (
            <span className="moon d-flex">
              <RiMoonLine />
            </span>
          )}
        </button>

        {/* Modal som visas när showModal är true */}
        {showModal && (
          <div className="fixed">
            <ul className="modal">
              <li>
                {/* Stängknapp för menu */}
                <Button name={<GrClose />} onClick={handleCloseModal} />
              </li>
              {/* Navigationslänkar för menu */}
              <LiHeader onClick={handleCloseModal} title="Home" link="/" />
              <LiHeader
                onClick={handleCloseModal}
                title="About Me"
                link="/about"
              />
              <LiHeader
                onClick={handleCloseModal}
                title="Resume"
                link="/resume"
              />
              <LiHeader
                onClick={handleCloseModal}
                title="Contact"
                link="/contact"
              />
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
