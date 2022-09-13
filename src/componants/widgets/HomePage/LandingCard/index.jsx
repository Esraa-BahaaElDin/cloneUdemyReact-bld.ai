import style from "../LandingCard/style.module.css";
const LandingCard = () => {
  return (
    <>
      <section className={style.LandingCard}>
        <div className={`${style.coll} ${style.titleCard}`}>
          <h1>The skills for now — now on sale</h1>
          Chart your path to success. Log in for limited-time savings on the
          latest topics.
        </div>
        <img
          className={style.coll}
          src={require("../../../assets/card2.png")}
          alt="Card Cover"
        />
      </section>
    </>
  );
};
export default LandingCard;
