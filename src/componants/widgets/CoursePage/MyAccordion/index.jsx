import { useState } from "react";
import style from "../MyAccordion/style.module.css";
import MyAccordionItem from "../MyAccordionItem";
const MyAccordion = (props) => {
  const [showMore, setShowMore] = useState(false);
  const numberOfItems = showMore
    ? props.lectures.length
    : Math.min(5, props.lectures.length);
  const onShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        {props.lectures.slice(0, numberOfItems).map((lecture, index) => {
          return (
            <MyAccordionItem
              key={lecture}
              index={index}
              header={lecture}
              contentPoints={props.content[index]}
            />
          );
        })}

        <button className={style.showMoreBtn} onClick={onShowMore}>
          Show {showMore ? "less" : "more"}
        </button>
      </div>
    </>
  );
};
export default MyAccordion;
