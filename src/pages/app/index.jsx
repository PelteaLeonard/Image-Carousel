import styles from "./styles.module.css";
import canal from "../../assets/images/canal.jpeg";
import farmhouse from "../../assets/images/farmhouse.jpg";
import planet from "../../assets/images/planet.jpeg";
import lake from "../../assets/images/lake.jpg";
import lakehouse from "../../assets/images/lakehouse.jpg";
import leaf from "../../assets/images/leaf.jpeg";
import river from "../../assets/images/river.jpg";
import tree from "../../assets/images/tree.jpg";
import turtle from "../../assets/images/turtle.jpg";
import cn from "classnames";
import { useState } from "react";

import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";

const images = [
  canal,
  farmhouse,
  planet,
  lake,
  lakehouse,
  leaf,
  river,
  tree,
  turtle,
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getClass = (index) => {
    const previousIndex =
      currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;

    if (index === currentIndex) {
      return styles.main;
    } else if (index === previousIndex || index === nextIndex) {
      return styles.secondary;
    } else {
      return styles.hide;
    }
  };

  const handleClickCircleLeft = () => {
    setCurrentIndex((index) => (index - 1 + images.length) % images.length);
  };

  const handleClickCircleRight = () => {
    setCurrentIndex((index) => (index + 1) % images.length);
  };

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>Image Carousel</h1>
      <div className={styles.container}>
        <FaChevronCircleLeft
          className={styles.chevron}
          onClick={handleClickCircleLeft}
        />
        {images.map((imagine, index) => (
          <img
            key={index}
            className={cn(styles.image, getClass(index))}
            alt=""
            src={imagine}
          />
        ))}
        <FaChevronCircleRight
          className={styles.chevron}
          onClick={handleClickCircleRight}
        />
      </div>
      <div className={styles.dotContainer}></div>
    </div>
  );
}

export default App;
