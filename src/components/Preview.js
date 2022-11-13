import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import styles from "../styles/preview.module.scss";
import Detail from "./Detail";
import Data from "../Data";

function Preview({ id, img1, img2, place, time, formula }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button className={styles.preview} onClick={() => setOpen(true)}>
        <img src={img1} alt={place}></img>
        <h1>📍{place}</h1>
        {/* <h3>{formula}</h3> */}
      </button>

      {open ? (
        <button className={styles.closeBtn} onClick={() => setOpen(false)}>
          x
        </button>
      ) : null}

      <Detail
        key={id}
        id={id}
        img1={img1}
        img2={img2}
        place={place}
        time={time}
        formula={formula}
        open={open}
      />
    </div>
  );
}

Preview.propTypes = {
  id: PropTypes.number.isRequired,
  img1: PropTypes.string.isRequired,
  img2: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  formula: PropTypes.string.isRequired,
};

export default Preview;