import { useRef } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import style from "../NavigationBar/style.module.css";
const NavigationBar = (props) => {
  const [search, setSearch] = useSearchParams();
  const inputRef = useRef();
  const navigate = useNavigate();

  const onFormSubmit = async (event) => {
    event.preventDefault();

    if (window.location.pathname !== "/") {
      navigate({
        pathname: "/",
        search: `?SearchValue=${inputRef.current.value}`,
      });
    } else {
      setSearch({ SearchValue: inputRef.current.value });
    }
  };
  return (
    <>
      <nav className={style.navBar}>
        <div className={style.sideMenu}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <Link to="/" className={style.logo}>
          <img
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/2560px-Udemy_logo.svg.png"
          />
        </Link>
        <a href="/">Categories</a>
        <form className={style.searchBarForm} onSubmit={onFormSubmit}>
          <div className={style.searchBar}>
            <i className="fa fa-search"></i>
            <input placeholder="Search for anything" ref={inputRef} />
            <button type="submit">Search</button>
          </div>
        </form>
        <a href="/" className={style.teachLink}>
          Udemy Business
        </a>
        <a href="/" className={style.teachLink}>
          Teach on Udemy
        </a>
        <i className={`fa fa-shopping-cart ${style.shoppingIcon}`}></i>
        <div className={style.buttonsContainer}>
          <button className={style.navbarButton}>Log in</button>
          <button className={`${style.navbarButton} ${style.signupBtn}`}>
            Sign up
          </button>
          <button className={`${style.navbarButton} ${style.globeBtn}`}>
            <i className="fas fa-globe"></i>
          </button>
        </div>
        <div className={style.mobileIcons}>
          <i className="fa fa-search"></i>
          <i className={`fa fa-shopping-cart ${style.shoppingIcon}`}></i>
        </div>
      </nav>
    </>
  );
};
export default NavigationBar;
