import Image from "next/image";
import styles from "./page.module.css";
import Menu from "./menu";

const menus = [
  {
    categoryName: "Salads",
    foods: [
      {
        foodName: "CHIKEN CAESER SALAD",
        ingredients:
          "Served with Sundried tomatoes , chunkly garlic croutons and grilled Chiken",
        price: 24900,
      },
      {
        foodName: "GREK SALAD",
        ingredients:
          "fresh cucumbers, tomatoes, red onions, Kalamata olives, and feta  cheese, drizzled with olive oil.",
        price: 21900,
      },
      {
        foodName: "QUINOA POWER SALAD",
        ingredients:
          "A healthy  mix of quinoa, avocado, roasted sweet pototoes, and kale with a tangy leon dressing ",
        price: 21900,
      },
    ],
  },
  {
    categoryName: "Burger",
    foods: [
      {
        foodName: "Classic burger",
        ingredients:
          "Juicy beef patty, cheddar cheese, lettuce, tomato, and house-made sauce, served with fries",
        price: 18900,
      },
      {
        foodName: "BBQ BACON BURGER",
        ingredients:
          "fresh cucumbers, tomatoes, red onions, Kalamata olives, and feta  cheese, drizzled with olive oil.",
        price: 21900,
      },
      {
        foodName: "VEGAN BLACK BEAN BURGER",
        ingredients:
          "A healthy  mix of quinoa, avocado, roasted sweet pototoes, and kale with a tangy leon dressing ",
        price: 17900,
      },
    ],
  },
  {
    categoryName: "PASTA",
    foods: [
      {
        foodName: "SPAGHETTI PASTA",
        ingredients:
          "Classic italian pasta with creamy egg sauce, Parmesan cheese, and crsppy pancetta",
        price: 20900,
      },
      {
        foodName: "SEAFOOD MARINARA",
        ingredients:
          "fresh cucumbers, tomatoes, red onions, Kalamata olives, and feta  cheese, drizzled with olive oil.",
        price: 23500,
      },
      {
        foodName: "PESTO CHICKEN PASTA",
        ingredients:
          "A healthy  mix of quinoa, avocado, roasted sweet pototoes, and kale with a tangy leon dressing ",
        price: 21000,
      },
    ],
  },
  {
    categoryName: "PIZZA",
    foods: [
      {
        foodName: "MARGHERITI PIZZA",
        ingredients:
          "Simple and classsic with tomato sauce, fresh mozzarella, and basil leaves",
        price: 30900,
      },
      {
        foodName: "PEPPERONI FEAST",
        ingredients:
          "Loaded with pepperioni and melted mozzarella on a crispy crust",
        price: 34500,
      },
      {
        foodName: "VEGETARIAN DELIGHT",
        ingredients:
          "Topped with bell peppers, mushrooms, olives, onions, and fresh tomatoes ",
        price: 29900,
      },
    ],
  },
];
export default function HomePage() {
  return (
    <div>
      <h1 className="title">PRANZO</h1>
      <div className="container">
        {menus.map((menu) => {
          return <Menu categoryName={menu.categoryName} foods={menu.foods} />;
        })}
      </div>
    </div>
  );
}
