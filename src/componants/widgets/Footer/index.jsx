import style from "../Footer/style.module.css";
const Footer = () => {
  return (
    <>
      <footer className={style.footer}>
        <div className={style.fHeader}>
          <h4 className={style.fHeaderTxt}>
            Top companies choose{" "}
            <span className={style.fLink}>Udemy Business</span> to build
            in-demand career skills.
          </h4>
          <div className={style.sponsers}>
            <ul className={style.sponsersList}>
              <li className={style.sponsersListElem}>
                <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" />
              </li>
              <li className={style.sponsersListElem}>
                <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" />
              </li>
              <li className={style.sponsersListElem}>
                <img src="https://s.udemycdn.com/partner-logos/v4/box-light.svg" />
              </li>
              <li className={style.sponsersListElem}>
                <img src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" />
              </li>
              <li className={style.sponsersListElem}>
                <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" />
              </li>
            </ul>
          </div>
        </div>
        <div className={style.mainSection}>
          <div>
            <ul className={style.udemyPages}>
              <li className={style.listElem}>Udemy Business</li>
              <li className={style.listElem}>Teach on Udemy</li>
              <li className={style.listElem}>Get the app</li>
              <li className={style.listElem}>About us</li>
              <li className={style.listElem}>Contact us</li>
            </ul>

            <ul className={style.udemyPages}>
              <li className={style.listElem}>Careers</li>
              <li className={style.listElem}>Blog</li>
              <li className={style.listElem}>Help and Support</li>
              <li className={style.listElem}>Affiliate</li>
              <li className={style.listElem}>Investors</li>
            </ul>

            <ul className={style.udemyPages}>
              <li className={style.listElem}>Terms</li>
              <li className={style.listElem}>Privacy policy</li>
              <li className={style.listElem}>Cookie settings</li>
              <li className={style.listElem}>Sitemap</li>
              <li className={style.listElem}>Accessibility statement</li>
            </ul>
          </div>
          <button className={style.langBtn}>
            <p className={style.langTxt}>English</p>
          </button>
        </div>
        <div className={style.logoCopyRights}>
          <img
            className={style.logo}
            src={require("../../assets/logo-udemy.svg")}
          />
          <p className={style.copyRights}>&copy; 2022 Udemy, Inc.</p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
