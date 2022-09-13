import style from "../Rating/style.module.css";
const Rating = (props) => {
  return (
    <>
      <div className={style.rating}>
        {props.rating}
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fas fa-star-half-alt"></i>
      </div>
    </>
  );
};
export default Rating;
