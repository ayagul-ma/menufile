import Image from "next/image";
import styles from "./page.module.css";


const menu = [
  {
    categoryName:"Salads",
    foods: {
      foodName: 'CHIKEN CAESER SALAD',
      ingredients: 'Served with Sundried tomatoes , chunkly garlic croutons and grilled Chiken',
      price: 24900,

    }
  },
  {
    foods: {
      foodName: 'GREK SALAD',
      ingredients: 'fresh cucumbers, tomatoes, red onions, Kalamata olives, and feta  cheese, drizzled with olive oil.',
      price: 21900,

    }
  },
  {
    foods: {
      foodName: 'QUINOA POWER SALAD',
      ingredients: 'A healthy  mix of quinoa, avocado, roasted sweet pototoes, and kale with a tangy leon dressing ',
      price: 21900,

    }
  },
  {
    categoryName:"Burger",
    foods: {
      foodName: 'Classic burger',
      ingredients: 'Juicy beef patty, cheddar cheese, lettuce, tomato, and house-made sauce, served with fries',
      price: 18900,

    }
  },
  {
    foods: {
      foodName: 'BBQ BACON BURGER',
      ingredients: 'fresh cucumbers, tomatoes, red onions, Kalamata olives, and feta  cheese, drizzled with olive oil.',
      price: 21900,

    }
  },
  {
    foods: {
      foodName: 'VEGAN BLACK BEAN BURGER',
      ingredients: 'A healthy  mix of quinoa, avocado, roasted sweet pototoes, and kale with a tangy leon dressing ',
      price: 17900,

    }
  },
  {
    categoryName:"PASTA",
    foods: {
      foodName: 'SPAGHETTI PASTA',
      ingredients: 'Classic italian pasta with creamy egg sauce, Parmesan cheese, and crsppy pancetta',
      price: 20900,

    }
  },
  {
    foods: {
      foodName: 'SEAFOOD MARINARA',
      ingredients: 'fresh cucumbers, tomatoes, red onions, Kalamata olives, and feta  cheese, drizzled with olive oil.',
      price: 23500,

    }
  },
  {
    foods: {
      foodName: 'PESTO CHICKEN PASTA',
      ingredients: 'A healthy  mix of quinoa, avocado, roasted sweet pototoes, and kale with a tangy leon dressing ',
      price: 21000,

    }
  },
  {
    categoryName:"PIZZA",
    foods: {
      foodName: 'MARGHERITI PIZZA',
      ingredients: 'Simple and classsic with tomato sauce, fresh mozzarella, and basil leaves',
      price: 30900,

    }
  },
  {
    foods: {
      foodName: 'PEPPERONI FEAST',
      ingredients: 'Loaded with pepperioni and melted mozzarella on a crispy crust',
      price: 34500,

    }
  },
  {
    foods: {
      foodName: 'VEGETARIAN DELIGHT',
      ingredients: 'Topped with bell peppers, mushrooms, olives, onions, and fresh tomatoes ',
      price: 29900,

    }
  },
]
export default function Menu({categoryName,foods, foodName, ingredients, price}) {
  return(
    <div>
      <div>
        <h1 className="title">pronxo</h1>
        <div className="card-container">
          <div className="category">
            <p>SALADS</p>
          </div>
            <div className="food">
              <div className="food-header">
                <h6>CHICKEN CAESER SALAD</h6>
                <p>20900</p>
              </div>
              <div>
                <p>Served with Sundried tomatoes , chunkly garlic croutons and grilled Chiken</p>
              </div>
            </div>
            <div className="food">
              <div className="food-header">
                <h6>GREEK SALAD</h6>
                <p>21900</p>
              </div>
              <div>
                <p>fresh cucumbers, tomatoes, red onions, Kalamata olives, and feta  cheese, drizzled with olive oil</p>
              </div>
            </div>
            <div className="food">
              <div className="food-header">
                <h6>QUINOA POWER SALAD</h6>
                <p>22500</p>
              </div>
              <div>
                <p>A healthy  mix of quinoa, avocado, roasted sweet pototoes, and kale with a tangy leon dressing</p>
              </div>
            </div>
        </div>
     </div>
    </div>
  );
}