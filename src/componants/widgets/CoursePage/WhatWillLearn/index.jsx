import CheckedItem from "../CheckedItem";
import style from "../WhatWillLearn/style.module.css";
const WhatWillLearn = (props) => {
  return (
    <>
      <div className={style.frame}>
        <h2>What you'll learn</h2>
        <div className={style.list}>
          {props.course.current.outcomes.map((outcome, index) => (
            <CheckedItem key={index} content={outcome} />
          ))}
        </div>
      </div>
    </>
  );
};
export default WhatWillLearn;
