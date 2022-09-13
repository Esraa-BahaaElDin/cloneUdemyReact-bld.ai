import style from "../CheckedItem/style.module.css";
const CheckedItem = (props) => {
  return (
    <>
      <div className={style.item}>
        <i className={`fa fa-check ${style.icon}`} aria-hidden="true"></i>
        {props.content}
      </div>
    </>
  );
};
export default CheckedItem;
