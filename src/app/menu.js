import Image from "next/image";
import styles from "./page.module.css";

export default function Menu({ categoryName, foods }) {
  const food = [];
  for (let i = 0; i < foods.length; i++) {
    food.push(
      <div className="food" key={i}>
        <div className="food-header">
          <h6>{foods[i].foodName}</h6>
          <p>{foods[i].price}</p>
        </div>
        <div>
          <p>{foods[i].ingredients}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card-container">
      <div className="category">
        <p>{categoryName}</p>
      </div>
      {food}
    </div>
  );
}
