import Image from "next/image";
import styles from "./page.module.css";

export default function Menu({ categoryName, foods }) {
  return (
    <div className="card-container">
      <div className="category">
        <p>{categoryName}</p>
      </div>

      {foods.map((food) => {
        return (
          <div className="food">
            <div className="food-header">
              <h6>{food.foodName}</h6>
              <p>{food.price}</p>
            </div>
            <div>
              <p>{food.ingredients}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
