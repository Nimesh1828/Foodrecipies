
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Categories from "../components/categories";
import FoodItems from "../components/recipes";
import Recipe from "../components/recipes";

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState("Chicken");

  // Hardcoded categories for news
  const [categories, setCategories] = useState([
    {
      idCategory: "1",
      strCategory: "Beef",
      strCategoryThumb: "https://www.themealdb.com/images/category/beef.png",
      
      },
    {
      idCategory: "2",
      strCategory: "Chicken",
      strCategoryThumb: "https://www.themealdb.com/images/category/chicken.png",
     
    },
    {
      idCategory: "3",
      strCategory: "Dessert",
      strCategoryThumb: "https://www.themealdb.com/images/category/dessert.png",
      
    },
    {
      idCategory: "4",
      strCategory: "Lamb",
      strCategoryThumb: "https://www.themealdb.com/images/category/lamb.png",
      
    },
    {
      idCategory: "5",
      strCategory: "Miscellaneous",
      strCategoryThumb: "https://www.themealdb.com/images/category/miscellaneous.png",
      
      },
      {
        idCategory: "6",
        strCategory: "Pasta",
        strCategoryThumb: "https://www.themealdb.com/images/category/pasta.png",
      },
      {
        idCategory: "7",
        strCategory: "Pork",
        strCategoryThumb: "https://www.themealdb.com/images/category/pork.png",
      },
      {
        idCategory: "8",
        strCategory: "Seafood",
        strCategoryThumb: "https://www.themealdb.com/images/category/seafood.png",
      },
      {
        idCategory: "9",
        strCategory: "Side",
        strCategoryThumb: "https://www.themealdb.com/images/category/side.png",
      },
      {
        idCategory: "10",
        strCategory: "Starter",
        strCategoryThumb: "https://www.themealdb.com/images/category/starter.png",
      },
      {
        idCategory: "11",
        strCategory: "Vegan",
        strCategoryThumb: "https://www.themealdb.com/images/category/vegan.png",
      },
      {
        idCategory: "12",
        strCategory: "Vegetarian",
        strCategoryThumb: "https://www.themealdb.com/images/category/vegetarian.png",
      },
      {
        idCategory: "13",
        strCategory: "Breakfast",
        strCategoryThumb: "https://www.themealdb.com/images/category/breakfast.png",
      },
      {
        idCategory: "14",
        strCategory: "Goat",
        strCategoryThumb: "https://images.unsplash.com/photo-1619711667542-c049700dd9e0?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      
  ]);

  // Keep all foods in state (unfiltered list)
  const [allFood, setAllFood] = useState([
    {
      category:'Beef',
      idFood:'1',
      idCategory: "1",
      recipeName: "Beef and Mustard Pie",
      recipeInstructions: "Preheat the oven to 150C/300F/Gas 2.\r\nToss the beef and flour together in a bowl with some salt and black pepper.\r\nHeat a large casserole until hot, add half of the rapeseed oil and enough of the beef to just cover the bottom of the casserole.\r\nFry until browned on each side, then remove and set aside. Repeat with the remaining oil and beef.\r\nReturn the beef to the pan, add the wine and cook until the volume of liquid has reduced by half, then add the stock, onion, carrots, thyme and mustard, and season well with salt and pepper.\r\nCover with a lid and place in the oven for two hours.\r\nRemove from the oven, check the seasoning and set aside to cool. Remove the thyme.\r\nWhen the beef is cool and you're ready to assemble the pie, preheat the oven to 200C/400F/Gas 6.\r\nTransfer the beef to a pie dish, brush the rim with the beaten egg yolks and lay the pastry over the top. Brush the top of the pastry with more beaten egg.\r\nTrim the pastry so there is just enough excess to crimp the edges, then place in the oven and bake for 30 minutes, or until the pastry is golden-brown and cooked through.\r\nFor the green beans, bring a saucepan of salted water to the boil, add the beans and cook for 4-5 minutes, or until just tender.\r\nDrain and toss with the butter, then season with black pepper.\r\nTo serve, place a large spoonful of pie onto each plate with some green beans alongside.",
      recipeImage: "https://images.unsplash.com/photo-1587248720327-8eb72564be1e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      recipeId: "beef_01",
      alternateDrink: null,
      recipeCategory: "Beef",
      recipeOrigin: "British",
      cookingDescription: "Preheat the oven to 150C/300F/Gas 2. Toss the beef and flour together in a bowl with some salt and black pepper...",
      recipeTags: "Meat,Pie",
      ingredients: [
        {
          ingredientName: "Beef",
          measure: "1kg"
        },
        {
          ingredientName: "Plain Flour",
          measure: "2 tbs"
        },
        {
          ingredientName: "Rapeseed Oil",
          measure: "2 tbs"
        },
        {
          ingredientName: "Red Wine",
          measure: "200ml"
        },
        {
          ingredientName: "Beef Stock",
          measure: "400ml"
        },
        {
          ingredientName: "Onion",
          measure: "1 finely sliced"
        },
        {
          ingredientName: "Carrots",
          measure: "2 chopped"
        },
        {
          ingredientName: "Thyme",
          measure: "3 sprigs"
        },
        {
          ingredientName: "Mustard",
          measure: "2 tbs"
        },
        {
          ingredientName: "Egg Yolks",
          measure: "2 free-range"
        },
        {
          ingredientName: "Puff Pastry",
          measure: "400g"
        },
        {
          ingredientName: "Green Beans",
          measure: "300g"
        },
        {
          ingredientName: "Butter",
          measure: "25g"
        },
        {
          ingredientName: "Salt",
          measure: "pinch"
        },
        {
          ingredientName: "Pepper",
          measure: "pinch"
        }
      ],
       

    },
    {
      category:'Beef',
      idFood:'2',
      idCategory: "1",
      recipeInstructions: "Add'l ingredients: mayonnaise, siracha\r\n\r\n1\r\n\r\nPlace rice in a fine-mesh sieve and rinse until water runs clear. Add to a small pot with 1 cup water (2 cups for 4 servings) and a pinch of salt. Bring to a boil, then cover and reduce heat to low. Cook until rice is tender, 15 minutes. Keep covered off heat for at least 10 minutes or until ready to serve.\r\n\r\n2\r\n\r\nMeanwhile, wash and dry all produce. Peel and finely chop garlic. Zest and quarter lime (for 4 servings, zest 1 lime and quarter both). Trim and halve cucumber lengthwise; thinly slice crosswise into half-moons. Halve, peel, and medium dice onion. Trim, peel, and grate carrot.\r\n\r\n3\r\n\r\nIn a medium bowl, combine cucumber, juice from half the lime, ¼ tsp sugar (½ tsp for 4 servings), and a pinch of salt. In a small bowl, combine mayonnaise, a pinch of garlic, a squeeze of lime juice, and as much sriracha as you’d like. Season with salt and pepper.\r\n\r\n4\r\n\r\nHeat a drizzle of oil in a large pan over medium-high heat. Add onion and cook, stirring, until softened, 4-5 minutes. Add beef, remaining garlic, and 2 tsp sugar (4 tsp for 4 servings). Cook, breaking up meat into pieces, until beef is browned and cooked through, 4-5 minutes. Stir in soy sauce. Turn off heat; taste and season with salt and pepper.\r\n\r\n5\r\n\r\nFluff rice with a fork; stir in lime zest and 1 TBSP butter. Divide rice between bowls. Arrange beef, grated carrot, and pickled cucumber on top. Top with a squeeze of lime juice. Drizzle with sriracha mayo.",
      recipeName: "Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber",
      recipeImage: "https://images.unsplash.com/photo-1676300185292-e23bb3db50fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      recipeId: "beef_02",
      alternateDrink: null,
      recipeCategory: "Beef",
      recipeOrigin: "Vietnamese",
      cookingDescription: "In a medium bowl, toss cucumber with vinegar, salt, and sugar; set aside to pickle...",
      recipeTags: "Rice,Bowl",
      ingredients: [
        {
          ingredientName: "Ground Beef",
          measure: "500g"
        },
        {
          ingredientName: "Rice",
          measure: "200g"
        },
        {
          ingredientName: "Cucumber",
          measure: "1 sliced"
        },
        {
          ingredientName: "Carrot",
          measure: "1 grated"
        },
        {
          ingredientName: "Sriracha",
          measure: "2 tbs"
        },
        {
          ingredientName: "Mayonnaise",
          measure: "3 tbs"
        },
        {
          ingredientName: "Soy Sauce",
          measure: "2 tbs"
        },
        {
          ingredientName: "Lime",
          measure: "1 juiced"
        },
        {
          ingredientName: "Brown Sugar",
          measure: "1 tbs"
        },
        {
          ingredientName: "Vinegar",
          measure: "2 tbs"
        }
      ],
    },
    {
      idCategory: "1",
      idFood:'3',
      category:'Beef',
      recipeName: "Beef Brisket Pot Roast",
      recipeInstructions:"To cook Beef Brisket Pot Roast, preheat the oven to 160°C (320°F) and season a 1.5kg beef brisket with 2 tsp salt, 1 tsp pepper, 1 tsp garlic powder, and 1 tsp onion powder. Heat 2 tbsp olive oil in a large oven-safe pot over medium-high heat, sear the brisket on all sides, then set it aside. In the same pot, sauté 2 chopped onions, 4 chopped carrots, and 3 minced garlic cloves until softened. Pour in 250ml red wine, deglaze the pot by scraping up the browned bits, and simmer for 2-3 minutes. Add 500ml beef stock and 3 sprigs of thyme, then return the brisket to the pot. Cover and cook in the oven for 3-4 hours until the meat is tender. Let the brisket rest for 10-15 minutes before slicing, and serve with the vegetables and sauce from the pot.",
      recipeImage: "https://images.unsplash.com/photo-1622003184404-bc0c66144534?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      recipeId: "beef_03",
      alternateDrink: null,
      recipeCategory: "Beef",
      recipeOrigin: "American",
      cookingDescription: "Preheat oven to 160°C/325°F. Rub brisket with salt, pepper, garlic powder, and onion powder...",
      recipeTags: "Roast,Pot",
      ingredients: [
        {
          ingredientName: "Beef Brisket",
          measure: "1.5kg"
        },
        {
          ingredientName: "Salt",
          measure: "2 tsp"
        },
        {
          ingredientName: "Pepper",
          measure: "1 tsp"
        },
        {
          ingredientName: "Garlic Powder",
          measure: "1 tsp"
        },
        {
          ingredientName: "Onion Powder",
          measure: "1 tsp"
        },
        {
          ingredientName: "Olive Oil",
          measure: "2 tbs"
        },
        {
          ingredientName: "Onions",
          measure: "2 chopped"
        },
        {
          ingredientName: "Carrots",
          measure: "4 chopped"
        },
        {
          ingredientName: "Garlic",
          measure: "3 cloves minced"
        },
        {
          ingredientName: "Beef Stock",
          measure: "500ml"
        },
        {
          ingredientName: "Red Wine",
          measure: "250ml"
        },
        {
          ingredientName: "Thyme",
          measure: "3 sprigs"
        }
      ],

    },
    {
      idCategory: "1",
      idFood:'4',
      category:'Beef',
      recipeName: "Beef Bourguignon",
              recipeInstructions: "Heat a large casserole pan and add 1 tbsp goose fat. Season the beef and fry until golden brown, about 3-5 mins, then turn over and fry the other side until the meat is browned all over, adding more fat if necessary. Do this in 2-3 batches, transferring the meat to a colander set over a bowl when browned.\r\nIn the same pan, fry the bacon, shallots or pearl onions, mushrooms, garlic and bouquet garni until lightly browned. Mix in the tomato purée and cook for a few mins, stirring into the mixture. This enriches the bourguignon and makes a great base for the stew. Then return the beef and any drained juices to the pan and stir through.\r\nPour over the wine and about 100ml water so the meat bobs up from the liquid, but isn’t completely covered. Bring to the boil and use a spoon to scrape the caramelised cooking juices from the bottom of the pan – this will give the stew more flavour.\r\nHeat oven to 150C/fan 130C/gas 2. Make a cartouche: tear off a square of foil slightly larger than the casserole, arrange it in the pan so it covers the top of the stew and trim away any excess foil. Then cook for 3 hrs. If the sauce looks watery, remove the beef and veg with a slotted spoon, and set aside. Cook the sauce over a high heat for a few mins until the sauce has thickened a little, then return the beef and vegetables to the pan.\r\nTo make the celeriac mash, peel the celeriac and cut into cubes. Heat the olive oil in a large frying pan. Tip in the celeriac and fry for 5 mins until it turns golden. Season well with salt and pepper. Stir in the rosemary, thyme, bay and cardamom pods, then pour over 200ml water, enough to nearly cover the celeriac. Turn the heat to low, partially cover the pan and leave to simmer for 25-30 mins.\r\nAfter 25-30 mins, the celeriac should be soft and most of the water will have evaporated. Drain away any remaining water, then remove the herb sprigs, bay and cardamom pods. Lightly crush with a potato masher, then finish with a glug of olive oil and season to taste. Spoon the beef bourguignon into serving bowls and place a large spoonful of the celeriac mash on top. Garnish with one of the bay leaves, if you like.",
      recipeImage: "https://images.unsplash.com/photo-1548869206-93b036288d7e?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      recipeId: "beef_04",
      alternateDrink: null,
      recipeCategory: "Beef",
      recipeOrigin: "French",
      cookingDescription: "Preheat the oven to 150°C. Heat oil in a large casserole, brown the beef, and set aside. In the same pot, sauté onions...",
      recipeTags: "Stew,Meat",
      ingredients: [
        {
          ingredientName: "Beef Chuck",
          measure: "1kg"
        },
        {
          ingredientName: "Onions",
          measure: "2 sliced"
        },
        {
          ingredientName: "Carrots",
          measure: "3 chopped"
        },
        {
          ingredientName: "Garlic",
          measure: "4 cloves minced"
        },
        {
          ingredientName: "Bacon",
          measure: "150g chopped"
        },
        {
          ingredientName: "Red Wine",
          measure: "500ml"
        },
        {
          ingredientName: "Beef Stock",
          measure: "500ml"
        },
        {
          ingredientName: "Thyme",
          measure: "2 sprigs"
        },
        {
          ingredientName: "Mushrooms",
          measure: "200g sliced"
        },
        {
          ingredientName: "Butter",
          measure: "50g"
        },
        {
          ingredientName: "Salt",
          measure: "pinch"
        },
        {
          ingredientName: "Pepper",
          measure: "pinch"
        }
      ],

    },
    {
      idFood:'5',
      idCategory: "1",
      category:'Beef',
      recipeInstructions:"To make Beef Stroganoff, season 500g of thinly sliced beef with salt and pepper, then lightly coat the beef with 2 tablespoons of flour. Heat 2 tablespoons of olive oil and 2 tablespoons of butter in a large pan over medium-high heat. Sear the beef strips in batches until browned, then remove and set aside. In the same pan, sauté 1 finely chopped onion and 2 minced garlic cloves until soft and fragrant. Add 250g of sliced mushrooms and cook until softened. Stir in 1 tablespoon of flour, cook for 1 minute, then pour in 1 cup of beef stock and 1 cup of sour cream. Simmer the mixture for a few minutes, then return the beef to the pan and cook for another 5 minutes, allowing the sauce to thicken and coat the beef. Serve hot over noodles or rice, garnished with fresh parsley.",
      recipeName: "Beef Stroganoff",
      recipeImage: "https://images.unsplash.com/photo-1726677730666-fdc08a8da464?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      recipeId: "beef_05",
      alternateDrink: null,
      recipeCategory: "Beef",
      recipeOrigin: "Russian",
      cookingDescription: "Heat butter in a pan, cook the beef strips until browned. Add onions, garlic, and mushrooms, sautéing until soft...",
      recipeTags: "Creamy,Meat",
      ingredients: [
        {
          ingredientName: "Beef Sirloin",
          measure: "500g"
        },
        {
          ingredientName: "Onions",
          measure: "1 chopped"
        },
        {
          ingredientName: "Garlic",
          measure: "2 cloves minced"
        },
        {
          ingredientName: "Mushrooms",
          measure: "200g sliced"
        },
        {
          ingredientName: "Sour Cream",
          measure: "150g"
        },
        {
          ingredientName: "Dijon Mustard",
          measure: "1 tbs"
        },
        {
          ingredientName: "Beef Stock",
          measure: "200ml"
        },
        {
          ingredientName: "Butter",
          measure: "2 tbs"
        },
        {
          ingredientName: "Salt",
          measure: "pinch"
        },
        {
          ingredientName: "Pepper",
          measure: "pinch"
        }
      ],       
        
    },
    {
      idFood:'6',
      idCategory: "1",
      recipeInstructions:"To make Beef Tacos, heat 1 tablespoon of oil in a skillet over medium heat, then add 500g of ground beef and cook until browned, breaking it up with a spoon. Drain excess fat and stir in 1 packet of taco seasoning or a homemade mix of 1 tsp chili powder, 1/2 tsp cumin, 1/2 tsp paprika, 1/2 tsp garlic powder, and 1/2 tsp onion powder, along with 1/4 cup of water. Simmer for 5-7 minutes until the beef is fully cooked and the flavors meld. Warm taco shells or tortillas, then fill them with the seasoned beef. Top with your choice of shredded lettuce, diced tomatoes, grated cheese, sour cream, salsa, and guacamole. Serve and enjoy!",
      category:'Beef',
      recipeName: "Beef Tacos",
      recipeImage: "https://images.unsplash.com/photo-1619221882161-95135fca04e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      recipeId: "beef_06",
      alternateDrink: null,
      recipeCategory: "Beef",
      recipeOrigin: "Mexican",
      cookingDescription: "In a skillet, cook the beef until browned. Add onions, garlic, cumin, and chili powder, cooking for 5 minutes...",
      recipeTags: "Mexican,Taco",
      ingredients: [
        {
          ingredientName: "Ground Beef",
          measure: "500g"
        },
        {
          ingredientName: "Onions",
          measure: "1 chopped"
        },
        {
          ingredientName: "Garlic",
          measure: "2 cloves minced"
        },
        {
          ingredientName: "Cumin",
          measure: "1 tsp"
        },
        {
          ingredientName: "Chili Powder",
          measure: "1 tsp"
        },
        {
          ingredientName: "Tomatoes",
          measure: "2 chopped"
        },
        {
          ingredientName: "Lettuce",
          measure: "100g shredded"
        },
        {
          ingredientName: "Cheese",
          measure: "100g grated"
        },
        {
          ingredientName: "Sour Cream",
          measure: "100g"
        },
        {
          ingredientName: "Tortillas",
          measure: "6 small"
        }
      ],
      
        
    },
    {
      idCategory: "2",
      idFood:'7',
      recipeInstructions:"To make Chicken Curry, heat 2 tablespoons of oil in a large pan over medium heat, then sauté 1 chopped onion until soft. Add 2 minced garlic cloves, 1 tablespoon of grated ginger, and cook for 1-2 minutes. Stir in 2 tablespoons of curry powder, 1 teaspoon of cumin, and 1 teaspoon of turmeric, cooking for another minute until fragrant. Add 500g of diced chicken and brown the pieces on all sides. Pour in 400ml of coconut milk and 1 cup of chicken stock, bringing the mixture to a simmer. Cover and cook for 20-25 minutes until the chicken is tender. Season with salt and pepper to taste, then garnish with fresh cilantro. Serve the curry over rice or with naan bread.",
      category:'Chicken',
      recipeName: "Chicken Curry",
      recipeImage: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      recipeId: "chicken_01",
      recipeCategory: "Chicken",
      recipeOrigin: "Indian",
      cookingDescription: "Cook chicken with spices, tomatoes, and onions until tender.",
      recipeTags: "Spicy,Curry",
      ingredients: [
        {
          ingredientName: "Chicken",
          measure: "500g"
        },
        {
          ingredientName: "Onions",
          measure: "2 chopped"
        },
        {
          ingredientName: "Tomatoes",
          measure: "3 chopped"
        },
        {
          ingredientName: "Cumin",
          measure: "1 tsp"
        },
        {
          ingredientName: "Turmeric",
          measure: "1 tsp"
        }
      ],
    },
    {
      idCategory: "2",
      idFood:'8',
      recipeInstructions:"To make Chicken Alfredo, season 2 boneless, skinless chicken breasts with salt and pepper, then cook in a large skillet with 2 tablespoons of olive oil over medium heat until golden and cooked through, about 6-7 minutes per side. Remove the chicken, slice it, and set aside. In the same pan, melt 2 tablespoons of butter, add 3 minced garlic cloves, and sauté for 1 minute. Stir in 1 cup of heavy cream and bring to a simmer, then add 1 cup of grated Parmesan cheese, stirring until the sauce is smooth and thickened. Cook 300g of fettuccine pasta according to package instructions, drain, and toss it with the Alfredo sauce. Add the sliced chicken on top and garnish with parsley before serving.",
      category:'Chicken',
      recipeName: "Chicken Alfredo",

      recipeImage: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      recipeId: "chicken_02",
      recipeCategory: "Chicken",
      recipeOrigin: "Italian",
      cookingDescription: "Cook chicken with Alfredo sauce and serve with pasta.",
      recipeTags: "Pasta,Creamy",
      ingredients: [
        {
          ingredientName: "Chicken",
          measure: "400g"
        },
        {
          ingredientName: "Cream",
          measure: "200ml"
        },
        {
          ingredientName: "Parmesan",
          measure: "100g grated"
        }
      ],
    },
    {
      idCategory: "2",
      idFood:'9',
      category:'Chicken',
      recipeInstructions:"To make Chicken Parmesan, start by seasoning 2 boneless, skinless chicken breasts with salt and pepper, then coat each in flour, dip in beaten eggs, and cover with breadcrumbs mixed with grated Parmesan cheese. Heat 2 tablespoons of olive oil in a skillet over medium heat and cook the breaded chicken breasts for 4-5 minutes per side until golden brown and crispy. Transfer the chicken to a baking dish, top each breast with marinara sauce and shredded mozzarella cheese. Bake in a preheated oven at 190°C (375°F) for 15-20 minutes until the cheese is melted and bubbly. Garnish with fresh basil and serve over pasta or with a side salad.",
      recipeName: "Chicken Parmesan",
      recipeImage: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      recipeId: "chicken_03",
      recipeCategory: "Chicken",
      recipeOrigin: "Italian",
      cookingDescription: "Bread and fry chicken cutlets, then top with marinara sauce and cheese.",
      recipeTags: "Breaded,Cheesy",
      ingredients: [
        {
          ingredientName: "Chicken Cutlets",
          measure: "4 pieces"
        },
        {
          ingredientName: "Marinara Sauce",
          measure: "1 cup"
        },
        {
          ingredientName: "Mozzarella Cheese",
          measure: "1 cup shredded"
        }
      ],
    },
    {
      idCategory: "2",
      idFood:'10',
      category:'Chicken',
      recipeInstructions:"To make Chicken Teriyaki, heat 1 tablespoon of oil in a skillet over medium heat, then cook 2 boneless, skinless chicken breasts, sliced into strips, until browned and cooked through, about 5-6 minutes. In a small bowl, whisk together 1/4 cup soy sauce, 2 tablespoons of honey, 1 tablespoon of rice vinegar, 1 tablespoon of sesame oil, 1 tablespoon of cornstarch, and 2 minced garlic cloves. Pour the sauce over the cooked chicken and simmer for 3-4 minutes until the sauce thickens and coats the chicken. Serve the chicken teriyaki with steamed rice and garnish with sesame seeds and chopped green onions.",
      recipeName: "Chicken Teriyaki",
      recipeImage: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      recipeId: "chicken_04",
      recipeCategory: "Chicken",
      recipeOrigin: "Japanese",
      cookingDescription: "Marinate chicken in teriyaki sauce and grill until cooked.",
      recipeTags: "Grilled,Asian",
      ingredients: [
        {
          ingredientName: "Chicken",
          measure: "500g"
        },
        {
          ingredientName: "Teriyaki Sauce",
          measure: "1/2 cup"
        }
      ],
    },
    {
      idCategory: "2",
      idFood:'11',
      recipeInstructions:"To make Chicken Fajitas, heat 1 tablespoon of oil in a large skillet over medium heat, then cook 2 boneless, skinless chicken breasts, sliced into thin strips, seasoned with 1 teaspoon of chili powder, 1 teaspoon of cumin, 1/2 teaspoon of paprika, salt, and pepper. Cook the chicken for 5-6 minutes until browned and cooked through. Remove the chicken from the skillet and set aside. In the same pan, sauté 1 sliced onion and 2 sliced bell peppers for about 4-5 minutes until softened. Return the chicken to the skillet and toss to combine with the vegetables. Serve the fajitas with warm tortillas and your choice of toppings like guacamole, sour cream, salsa, and cheese.",
      category:'Chicken',
      recipeName: "Chicken Fajitas",
      recipeImage: "https://images.unsplash.com/photo-1689773976415-293dd893f77e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      recipeId: "chicken_05",
      recipeCategory: "Chicken",
      recipeOrigin: "Mexican",
      cookingDescription: "Cook chicken with bell peppers and onions, serve in tortillas.",
      recipeTags: "Mexican,Spicy",
      ingredients: [
        {
          ingredientName: "Chicken",
          measure: "500g"
        },
        {
          ingredientName: "Bell Peppers",
          measure: "2 sliced"
        },
        {
          ingredientName: "Onions",
          measure: "1 sliced"
        }
      ],
    },
    {
      idCategory: "2",
      idFood:'12',
      recipeInstructions:"To make a Chicken Caesar Salad, start by grilling or pan-searing 2 boneless, skinless chicken breasts seasoned with salt and pepper until cooked through, about 6-7 minutes per side, then let them rest before slicing. In a large bowl, combine 6 cups of chopped romaine lettuce, the sliced chicken, and 1/2 cup of grated Parmesan cheese. For the dressing, whisk together 1/4 cup of mayonnaise, 2 tablespoons of lemon juice, 1 teaspoon of Dijon mustard, 1 minced garlic clove, and salt and pepper to taste. Drizzle the dressing over the salad and toss gently to combine. Top with croutons and extra Parmesan before serving.",
      category:'Chicken',
      recipeName: "Chicken Caesar Salad",
      recipeImage: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      recipeId: "chicken_06",
      recipeCategory: "Chicken",
      recipeOrigin: "American",
      cookingDescription: "Grill chicken and toss with romaine lettuce, croutons, and Caesar dressing.",
      recipeTags: "Salad,Healthy",
      ingredients: [
        {
          ingredientName: "Chicken Breast",
          measure: "2 grilled"
        },
        {
          ingredientName: "Romaine Lettuce",
          measure: "1 head chopped"
        },
        {
          ingredientName: "Croutons",
          measure: "1 cup"
        },
        {
          ingredientName: "Caesar Dressing",
          measure: "1/4 cup"
        }
      ],
    },
    {
      idCategory: "2",
      idFood:'13',
      recipeInstructions:"To make Buffalo Chicken Wings, preheat your oven to 200°C (400°F) or heat oil in a deep fryer. If using the oven, line a baking sheet with aluminum foil and place a wire rack on top. Toss 1 kg of chicken wings with salt, pepper, and 1 teaspoon of baking powder for extra crispiness, then arrange them in a single layer on the rack. Bake for about 40-45 minutes, turning halfway, until golden and crispy. Meanwhile, in a saucepan, melt 1/2 cup of unsalted butter and whisk in 1/2 cup of hot sauce (like Frank's RedHot) and 1 tablespoon of vinegar. Once the wings are done, toss them in the Buffalo sauce until well coated. Serve hot with celery sticks and blue cheese or ranch dressing for dipping.",
      category:'Chicken',
      recipeName: "Buffalo Chicken Wings",
      recipeImage: "https://images.unsplash.com/photo-1608039755401-742074f0548d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      recipeId: "chicken_07",
      recipeCategory: "Chicken",
      recipeOrigin: "American",
      cookingDescription: "Deep-fry chicken wings and toss in buffalo sauce.",
      recipeTags: "Spicy,Fried",
      ingredients: [
        {
          ingredientName: "Chicken Wings",
          measure: "12 pieces"
        },
        {
          ingredientName: "Buffalo Sauce",
          measure: "1/2 cup"
        }
      ],
    },
    {
      idCategory: "2",
      idFood:'14',
      recipeInstructions:"To make Chicken and Rice, heat 2 tablespoons of oil in a large skillet over medium heat, then season 4 bone-in, skin-on chicken thighs with salt and pepper and brown them on both sides for about 5-7 minutes. Remove the chicken and set aside. In the same skillet, add 1 chopped onion and 2 minced garlic cloves, sautéing until the onion is translucent. Stir in 1 cup of long-grain rice, allowing it to toast for 1-2 minutes. Add 2 cups of chicken broth, 1 teaspoon of paprika, and the browned chicken thighs back to the skillet. Bring to a simmer, cover, and reduce the heat to low, cooking for 20-25 minutes or until the rice is tender and the chicken is cooked through. Fluff the rice with a fork, garnish with chopped parsley, and serve hot.",
      category:'Chicken',
      recipeName: "Chicken and Rice",
      recipeImage: "https://images.unsplash.com/photo-1617651523904-8768096faf40?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      recipeId: "chicken_08",
      recipeCategory: "Chicken",
      recipeOrigin: "American",
      cookingDescription: "Cook chicken with rice and seasonings in a single pot.",
      recipeTags: "Comfort Food,One-Pot",
      ingredients: [
        {
          ingredientName: "Chicken",
          measure: "500g"
        },
        {
          ingredientName: "Rice",
          measure: "1 cup"
        },
        {
          ingredientName: "Chicken Broth",
          measure: "2 cups"
        }
      ],
    },
    {
        idCategory: "3",
        idFood:'15',
        recipeInstructions:"For those new to affogato, it’s a traditional Italian coffee-dessert where hot espresso is poured over gelato or ice cream, with the option of adding a splash of liquor. It’s coffee, dessert, and an after-dinner drink, all rolled into one ",
        category:'Dessert',
        recipeName: "Affogato",
  
        recipeImage: "https://www.recipetineats.com/tachyon/2023/06/Affogato_0.jpg?resize=900%2C1125&zoom=0.72",
        recipeId: "dessert_1",
        recipeCategory: "Dessert",
        recipeOrigin: "Italian",
        cookingDescription: " Brew hot espresso using your coffee making appliance of choice. That’s 30 ml/1 ounce for a single shot.Put a scoop or two of ice cream in a glass.Pour over hot coffee. Enjoy watching the ice cream swirls melting into the hot coffee!If using liquor, pour that over next. Eat!",
        recipeTags: "espresso",
        ingredients: [
          {
            ingredientName: "vanilla gelato or ice cream",
            measure: " 1 large or 2 small"
          },
          {
            ingredientName: " hot espresso coffee ",
            measure: "1 tbsp"
          },
          {
            ingredientName: " frangelico, amaretto or other liquo",
            measure: "1 tbsp"
          },
           {
            ingredientName: "",
            measure: ""
          }
        ],
      },
      {
        idCategory: "3",
        idFood:'16',
        recipeInstructions:"Chocolate muffins are not all created equal. I’m fussy about mine and make no apologies about it – there are a lot of calories in a muffin, so every one of them better be worth it!  ",
        category:'Dessert',
        recipeName: "Chocolate Muffins",
  
        recipeImage: "https://www.recipetineats.com/tachyon/2021/08/Chocolate-Muffins_14.jpg?resize=900%2C1125&zoom=0.72",
        recipeId: "dessert_2",
        recipeCategory: "Dessert",
        recipeOrigin: "American",
        cookingDescription: " 1 egg rather than the usual 2 eggs;Brown sugar instead of white sugar;Oil instead of butter;Sour cream instead of milk;Coffee to enhance chocolate flavour (optional);Dutch-process cocoa powder for more intense chocolate flavour (optional);Blooming the cocoa powder with hot milk;Thinner batter than the usual muffin batters; and Briefly bake on a high temperature then lower temperature to finish!",
        recipeTags: "Muffin",
        ingredients: [
          {
            ingredientName: "plain flour (all-purpose flour) ",
            measure: " 1 3/4 cups"
          },
          {
            ingredientName: "baking soda / bi-carb",
            measure: "1 1/4 tsp"
          },
          {
            ingredientName: " salt",
            measure: "1/2 tsp "
          },
           {
            ingredientName: "instant coffee granules / powder",
            measure: "1 tbsp "
          },
          {
            ingredientName: "milk",
            measure: "3/4 cup "
          }
        ],
      },
      {
        idCategory: "3",
        idFood:'17',
        recipeInstructions:"Dice the flesh of the mango (see video for how I do it). Puree using a blender, food processor or stick blender then measure out 2 cups of mango puree (about 2 1/4 cups of diced mango).Pour puree into a non stick skillet over medium low heat. Cook, stirring constantly, for 8 - 10 minutes or until it reduces by half. The test is when you can drag a wooden spoon across the skillet and the path remains there for a second (see video). Or measure out the puree to ensure it's reduced to at least 1 cup - less is even better!Cool pureeIce Cream Combine cooled mango and condensed milk in a bowl. Add food colouring if using. Whisk until combined.Beat cream with a hand held beater or stand mixer until stiff peaks form (see video).Take a scoop of cream and put it in the mango mixture. Fold through until mostly combined - lumps is fine (this is just to lighten it up a bit).Then pour the mango mixture into the cream. Fold through (see video) rather than mixing vigorously like you would cake batter, until lump free. This wll take a few minutes.Pour into a container (preferably with a lid). I recommend glass, if you can, or other non reactive container.Place a piece of baking / parchment paper on the surface. Then place lid on or using cling wrap.Freeze for 12+ hours.Remove parchment paper. Stand for 5 minutes to soften slightly, then scoop and serve!If frozen for 24 hours or longer, it will need a couple of extra minutes to soften to a scoop able consistency. ",
        category:'Dessert',
        recipeName: "Homemade Mango Ice Cream Recipe",
  
        recipeImage: "https://www.recipetineats.com/tachyon/2017/02/Mango-Ice-Cream-10.jpg?resize=1200%2C1680&zoom=0.67",
        recipeId: "dessert_3",
        recipeCategory: "Dessert",
        recipeOrigin: "China",
        cookingDescription: " Dice the flesh of the mango (see video for how I do it). Puree using a blender, food processor or stick blender then measure out 2 cups of mango puree (about 2 1/4 cups of diced mango).Pour puree into a non stick skillet over medium low heat. Cook, stirring constantly, for 8 - 10 minutes or until it reduces by half. The test is when you can drag a wooden spoon across the skillet and the path remains there for a second (see video). Or measure out the puree to ensure it's reduced to at least 1 cup - less is even better!Cool pureeIce Cream Combine cooled mango and condensed milk in a bowl. Add food colouring if using. Whisk until combined.Beat cream with a hand held beater or stand mixer until stiff peaks form (see video).Take a scoop of cream and put it in the mango mixture. Fold through until mostly combined - lumps is fine (this is just to lighten it up a bit).Then pour the mango mixture into the cream. Fold through (see video) rather than mixing vigorously like you would cake batter, until lump free. This wll take a few minutes.Pour into a container (preferably with a lid). I recommend glass, if you can, or other non reactive container.Place a piece of baking / parchment paper on the surface. Then place lid on or using cling wrap.Freeze for 12+ hours.Remove parchment paper. Stand for 5 minutes to soften slightly, then scoop and serve!If frozen for 24 hours or longer, it will need a couple of extra minutes to soften to a scoop able consistency.",
        recipeTags: "Ice-Cream",
        ingredients: [
          {
            ingredientName: " mangoes",
            measure: " 2 Large"
          },
          {
            ingredientName: "sweetened condensed milk",
            measure: "395 g / 14 oz"
          },
          {
            ingredientName: "thickened cream / heavy cream / whipping cream",
            measure: "2 cups"
          },
           {
            ingredientName: " yellow liquid food colouring",
            measure: " 1tbsp"
          }
        ],
      },
      {
        idCategory: "3",
        idFood:'18',
        recipeInstructions:"Preheat oven to 160C/320F (all oven types).Spray a 20cm/9square tin with oil and line with baking/parchment paper with overhang (so it can be lifted out once cooked).Place biscuits in a food processor and blitz until fine crumbs form. Add butter and sugar and blitz to combine - it should look like wet sand. (Note 1)Pour into tin and use something with a flat bottom to press into base. ",
        category:'Dessert',
        recipeName: "Blueberry Cheesecake Bars",
  
        recipeImage: "https://www.recipetineats.com/tachyon/2016/10/Blueberry-Cheesecake-Bars-No-Bake-26.jpg?resize=1200%2C857&zoom=0.54",
        recipeId: "dessert_4",
        recipeCategory: "Dessert",
        recipeOrigin: "Australia",
        cookingDescription: " Australia! Blueberries are so crazy cheap at the moment, and I absolutely promise you, Blueberry Cheesecake is a spectacular way to use them!!! Creamy cheesecake with soft bursts of blueberry on a buttery biscuit base….just pure heaven.❤️",
        recipeTags: "Bluberry",
        ingredients: [
          {
            ingredientName: "blueberries ",
            measure: "2 cups "
          },
          {
            ingredientName: " cream cheese",
            measure: "250g"
          },
          {
            ingredientName: "sour cream",
            measure: "200g"
          },
           {
            ingredientName: "unsalted butter ",
            measure: "150g"
          }
        ],
      },
      {
        idCategory: "4",
        idFood:'19',
        recipeInstructions:"Cook – Heat 1 tbsp oil in a large non stick pan over medium high heat. Cook half the koftas for 2 minutes on each side until golden, then about 30 seconds on each short edge (just for a bit of colour). Reduce the heat if they’re browning too fast. Transfer to a serving plate, loosely cover with foil to keep warm. Cook the remaining koftas. (Scrape out loose burnt bits, if any. You shouldn’t need extra oil.) ",
        category:'Lamb',
        recipeName: "Greek Kofta Kebabs",
  
        recipeImage: "https://www.recipetineats.com/tachyon/2024/08/Greek-lamb-kofta-kebabs_6.jpg?resize=1200%2C1500&zoom=0.54",
        recipeId: "lamb_1",
        recipeCategory: "Lamb",
        recipeOrigin: "greek",
        cookingDescription: " Making kofta kebab wraps – This is how I make the wraps. There’s a very specific order! Firstly, spread sauce down the middle of the pita bread / flatbread. Top with lettuce – the sauce will glue it in place. Then place 2 koftas on top (remove the skewers). Well, I’m greedy so I use 2. If you’re not, you can use 1.",
        recipeTags: "lamb kebab",
        ingredients: [
          {
            ingredientName: " lamb mince",
            measure: " 500g"
          },
          {
            ingredientName: "garlic cloves",
            measure: "3"
          },
          {
            ingredientName: "olive oil",
            measure: "200ml"
          },
           {
            ingredientName: "Peprika",
            measure: ""
          }
        ],
      },
      {
        idCategory: "4",
        idFood:'20',
        recipeInstructions:"Cook – Heat 1 tbsp oil in a large non stick pan over medium high heat. Cook half the koftas for 2 minutes on each side until golden, then about 30 seconds on each short edge (just for a bit of colour). Reduce the heat if they’re browning too fast. Transfer to a serving plate, loosely cover with foil to keep warm. Cook the remaining koftas. (Scrape out loose burnt bits, if any. You shouldn’t need extra oil.) ",
        category:'Lamb',
        recipeName: "Mongolian Lamb",
  
        recipeImage: "https://www.recipetineats.com/tachyon/2020/08/Mongolian-lamb_9.jpg?resize=900%2C1260&zoom=0.72",
        recipeId: "lamb_2",
        recipeCategory: "Lamb",
        recipeOrigin: "Mongolian",
        cookingDescription: " Making kofta kebab wraps – This is how I make the wraps. There’s a very specific order! Firstly, spread sauce down the middle of the pita bread / flatbread. Top with lettuce – the sauce will glue it in place. Then place 2 koftas on top (remove the skewers). Well, I’m greedy so I use 2. If you’re not, you can use 1.",
        recipeTags: "lamb kebab",
        ingredients: [
          {
            ingredientName: " lamb mince",
            measure: " 500g"
          },
          {
            ingredientName: "garlic cloves",
            measure: "3"
          },
          {
            ingredientName: "olive oil",
            measure: "200ml"
          },
           {
            ingredientName: "butter",
            measure: ""
          }
        ],
      },
      {
        idCategory: "4",
        idFood:'21',
        recipeInstructions:"Cook – Heat 1 tbsp oil in a large non stick pan over medium high heat. Cook half the koftas for 2 minutes on each side until golden, then about 30 seconds on each short edge (just for a bit of colour). Reduce the heat if they’re browning too fast. Transfer to a serving plate, loosely cover with foil to keep warm. Cook the remaining koftas. (Scrape out loose burnt bits, if any. You shouldn’t need extra oil.) ",
        category:'Lamb',
        recipeName: "Rosemary Garlic Marinated Rack of Lamb (Roasted)",
  
        recipeImage: "https://www.recipetineats.com/tachyon/2021/03/Herb-Garlic-Rack-of-Lamb_7.jpg?resize=900%2C1260&zoom=0.72",
        recipeId: "lamb_3",
        recipeCategory: "Lamb",
        recipeOrigin: "Spain",
        cookingDescription: " Making wraps – This is how I make the wraps. There’s a very specific order! Firstly, spread sauce down the middle of the pita bread / flatbread. Top with lettuce – the sauce will glue it in place. Then place 2 koftas on top (remove the skewers). Well, I’m greedy so I use 2. If you’re not, you can use 1.",
        recipeTags: "lamb kebab",
        ingredients: [
          {
            ingredientName: " lamb ribs",
            measure: " 500g"
          },
          {
            ingredientName: "garlic cloves",
            measure: "3"
          },
          {
            ingredientName: "olive oil",
            measure: "200ml"
          },
           {
            ingredientName: " fresh rosemary",
            measure: ""
          }
        ],
      },
      {
        idCategory: "5",
        idFood:'22',
        recipeInstructions:" Making black bean and corn salsa only requires a little chopping and mixing. It truly couldn’t get any simpler! Below, find a quick hitter overview of the recipe before you dive in.n/Dice the Veggies: Using a sharp knife, dice all the veggies into similar-sized pieces, slice the cherry tomatoes into halves, and remove the corn kernels from the cob. Place all the ingredients into a large bowl.",
        category:'Miscellaneous',
        recipeName: "Black Bean and Corn Salsa Recipe",
  
        recipeImage: "https://www.allrecipes.com/thmb/_VsSpI8beY4Fw74VoWFk8NxgWS8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR-143315-heathers-cilantro-black-bean-and-corn-salsa-step-2-8ad4a54eae054106a7d745fe47470ce0.jpg",
        recipeId: "miscellaneous_1",
        recipeCategory: "Miscellaneous",
        recipeOrigin: "Russian",
        cookingDescription: " This recipe for black bean and corn salsa is perfect for your next cookout. Use it as a colorful dip for tortilla chips or pop a heaping spoonful of it on top of grilled chicken or a baked potato!",
        recipeTags: "Beans",
        ingredients: [
          {
            ingredientName: " bell pepper, (orange or red)",
            measure: " 1"
          },
          {
            ingredientName: "cherry tomatoes",
            measure: "1 cup"
          },
          {
            ingredientName: "corn on the cobs",
            measure: ""
          },
           {
            ingredientName: " olive oil",
            measure: ""
          }
        ],
      },
      {
        idCategory: "5",
        idFood:'23',
        recipeInstructions:"Cut into Triangles. Start by cutting each tortilla into triangles. Cut them into similar sized triangles for even cooking.",
        category:'Miscellaneous',
        recipeName: "Air Fryer Tortilla Chips",
  
        recipeImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDtOoULldbOALPrILIEwCYcyvCInoQvbR0xw&s",
        recipeId: "miscelloneous_2",
        recipeCategory: "Miscelloneous",
        recipeOrigin: "USA",
        cookingDescription: " This recipe for black bean and corn salsa is perfect for your next cookout. Use it as a colorful dip for tortilla chips or pop a heaping spoonful of it on top of grilled chicken or a baked potato!",
        recipeTags: "chips",
        ingredients: [
          {
            ingredientName: " corn tortillas",
            measure: " 12"
          },
          {
            ingredientName: "cherry tomatoes",
            measure: "1 cup"
          },
          {
            ingredientName: " avocado oil",
            measure: "250ml"
          },
           {
            ingredientName: " olive oil",
            measure: "50ml"
          }
        ],
      },
      {
        idCategory: "5",
        idFood:'24',
        recipeInstructions:"Preheat the oven to 250°F. Lightly grease two large rimmed baking sheets; or line them with parchment.In a very large bowl, combine the oats, coconut, wheat germ, nuts, and seeds. Mix well.In a separate bowl, whisk together the oil, salt, maple syrup, and vanilla.Pour the wet ingredients over the dry mixture in the bowl, stirring and tossing until everything is very well combined.",
        category:'Miscellaneous',
        recipeName: "Crunchy Granola",
  
        recipeImage: "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image_2x/public/recipe_legacy/5739-3-large.jpg?itok=DPxf8yte",
        recipeId: "miscelloneous_3",
        recipeCategory: "Miscelloneous",
        recipeOrigin: "England",
        cookingDescription: " What a pleasure, to start your day with a tummy-filling bowl of delicious whole-grain granola! And it's easy to make your own. Just stir together everything but the dried fruit, and bake until crunchy. Add your favorite fruits once it's cool.",
        recipeTags: "sliced",
        ingredients: [
          {
            ingredientName: "rolled oats",
            measure: "7 cups"
          },
          {
            ingredientName: "large-flake coconut, unsweetened",
            measure: "1 cup"
          },
          {
            ingredientName: "almonds, sliced",
            measure: "250ml"
          },
           {
            ingredientName: " olive oil",
            measure: "50ml"
          }
        ],
      },
      {
        idCategory: "6",
        idFood:'25',
        recipeInstructions:" Bring large pot of water to the boil - 4 to 5 litres / quarts. Add salt then add pasta. Cook per packet directions.Drain pasta then cool.Meanwhile, mix Dressing ingredients in a bowl.Place pasta in a bowl. Add remaining Macaroni Salad ingredients. Pour over Dressing.",
        category:'Pasta',
        recipeName: "Macaroni Salad",
  
        recipeImage: "https://www.recipetineats.com/tachyon/2017/12/Macaroni-Salad_2.jpg?resize=1200%2C1680&zoom=0.67",
        recipeId: "pasta_1",
        recipeCategory: "Pasta",
        recipeOrigin: "Italian",
        cookingDescription: " Macaroni Salad makes a terrific summertime lunch and is made for taking to gatherings. Simple to prepare and as diverse as you want it to be, this is a great classic pasta salad. ",
        recipeTags: "Macaroni",
        ingredients: [
          {
            ingredientName: "macaroni elbow pasta",
            measure: " "
          },
          {
            ingredientName: " red capsicum / bell peppers ",
            measure: ""
          },
          {
            ingredientName: "yoghurt or sour cream",
            measure: ""
          },
           {
            ingredientName: " Dijon mustard",
            measure: ""
          }
        ],
      },
      {
        idCategory: "6",
        idFood:'26',
        recipeInstructions:"Peel and devein the prawns, keeping the tails in tact. (Note 1)Discard the vein and place the heads and shells in a saucepan or pot to make the stock. (Note 2)Add 2 minced garlic cloves the minced garlic and 2 tbsp of olive oil. Use your fingers to gently coat the prawns. Cover and set aside to marinate while you make the stock.Add the remaining stock ingredients into the saucepan/pot and place over high heat. Bring to boil then turn down to medium / medium high and let it simmer rapidly.Get a potato masher and  the prawn heads and shells (to extract maximum flavour). Do this a couple of times while it is simmering.",
        category:'Pasta',
        recipeName: "Shrimp / Prawn Pasta with Lemon",
  
        recipeImage: "https://www.recipetineats.com/tachyon/2014/12/Lemon-Prawn-Shrimp-Pasta.jpg?resize=680%2C1024&zoom=0.95",
        recipeId: "pasta_2",
        recipeCategory: "Pasta",
        recipeOrigin: "Italian",
        cookingDescription: " using the prawn heads and shells to make a quick stock, you can make a pasta that is a step up from the usual. It’s not a full blown fish stock, just a quick one made using the prawn heads and shells. And it doesn’t taste fishy at all. I would describe it as sweet with a deep flavour. In fact, it’s actually quite hard to pick why the pasta tastes so good, you just know it does!",
        recipeTags: "Macaroni, shrimp",
        ingredients: [
          {
            ingredientName: " cherry tomatoes",
            measure: " 4"
          },
          {
            ingredientName: " large , raw, unpeeled prawns/shrimp ",
            measure: "500g"
          },
          {
            ingredientName: "chicken or fish stock/broth",
            measure: "1cup"
          },
           {
            ingredientName: " spaghetti",
            measure: "500g"
          },
          {
            ingredientName: " white wine",
            measure: "1cup"
          },
        ],
      },
      {
        idCategory: "6",
        idFood:'27',
        recipeInstructions:"Cook pasta according to packet directions minus 1 minute. Drain in a colander and rinse under cold water to stop it cooking further. Shake excess water off well then transfer into large bowl.Place remaining Pasta Salad ingredients in the bowl. Drizzle over Dressing and toss. Serve at room temperature.SCOOP OUT a mug of pasta cooking water just before draining. Add 3 tbsp water to Dressing, shake well. Use this Dressing per above, but reserve 3 tbsp to freshen up pasta salad on Day 2 onwards.",
        category:'Pasta',
        recipeName: "Italian Pasta Salad ",
  
        recipeImage: "https://www.recipetineats.com/tachyon/2017/03/Italian-Pasta-Salad-5.jpg?resize=1200%2C1680&zoom=0.67",
        recipeId: "pasta_3",
        recipeCategory: "Pasta",
        recipeOrigin: "Italian",
        cookingDescription: "This is a cold pasta salad recipe to be served at room temperature or slightly chilled which makes it ideal to make ahead for midweek meals, taking to gatherings, work lunches and buffet spreads.",
        recipeTags: "Pasta",
        ingredients: [
          {
            ingredientName: " cherry tomatoes",
            measure: " 4"
          },
          {
            ingredientName: "spiral pasta, or other pasta of choice",
            measure: "500g"
          },
          {
            ingredientName: "thick sliced salami, cut into 2.5cm/1",
            measure: "1cup"
          },
           {
            ingredientName: " spaghetti",
            measure: "500g"
          },
          {
            ingredientName: " white wine",
            measure: "1cup"
          },
        ],
      },
      {
        idCategory: "7",
        idFood:'28',
        recipeInstructions:"Cut pork – Cut into 8 equal, thinnish slices of pork. I find it easiest using the knife on a 45° angle, but if you have the right shape piece you can just cut straight down.Pound each steak to 5mm / 0.2 thickness using the scary side of a meat mallet jagged not flat using go-between Note 5 or a freezer bag to avoid damaging the meat.You can use baking paper for rolling pin or the flat side of the malle Marinade Mix the marinade ingredients in a bowl, it will fizz when the baking soda is added! Add pork then toss well to coat using tongs Transfer to a ziplock bag and marinate for 24 hours ",
        category:'Pork',
        recipeName: "Vietnamese Lemongrass Pork steaks",
  
        recipeImage: "https://www.recipetineats.com/tachyon/2023/04/Vietnamese-noodles-lemongrass-pork-1.jpg?resize=900%2C1125&zoom=0.72",
        recipeId: "pork_1",
        recipeCategory: "Pork",
        recipeOrigin: "Vietnamese",
        cookingDescription: "Pound to 5mm / 0.2″ thickness thick using a meat mallet (the jagged side) or rolling pin. Cover with go-between or freezer bags to prevent damaging the meat. (Go-between is a purpose made plastic sheet, sold alongside cling wrap. Also useful for stacking foods in the freezer without sticking together). ",
        recipeTags: "Pork",
        ingredients: [
          {
            ingredientName: "pork shoulder , skinless and boneless, or pork scotch (roast or steaks) ",
            measure: " 500g"
          },
          {
            ingredientName: "canola oil",
            measure: ""
          },
          {
            ingredientName: "▢2 lemongrass stalks , white part only, bruised, cut into 1 cm / 0.4″ slices on angle ",
            measure: ""
          },
           {
            ingredientName: " baking soda/bi-carb",
            measure: ""
          }
        ],
      },
      {
        idCategory: "7",
        idFood:'29',
        recipeInstructions:"Combine the Pork Carnitas, corn, black beans, capsicum and 1 1/2 cups of enchilada sauce in a bowl. Mix to combine.Line the baking dish with tortillas. I find the best way to do this is to cut the tortillas in half, place 2 on the baking dish (with the straight cut side lined to the edge of the baking dish), then cut 1 tortilla into 6 to 8 pieces and use those wedges to fill the gaps.Top with a third and final layer of tortillas. Spread remaining enchilada sauce (3/4 cup) across the top, then sprinkle with mozzarella cheese. Bake for 20 to 25 minutes until the cheese is melted and started to turn golden. ",
        category:'Pork',
        recipeName: "Mexican Lasagna Enchilada Stack",
  
        recipeImage: "https://www.recipetineats.com/tachyon/2014/09/DSC_0057-1.jpg?resize=206%2C206&zoom=1.51",
        recipeId: "pork_2",
        recipeCategory: "Pork",
        recipeOrigin: "Mexican",
        cookingDescription: "  Pork Carnitas (Mexican Pulled Pork) which is already seasoned, all that’s required is to mix it up with enchilada sauce, capsicum, corn and beans, ",
        recipeTags: "Pork, Lasagna",
        ingredients: [
          {
            ingredientName: "5 - 6 tortillas",
            measure: " "
          },
          {
            ingredientName: "shredded Pork Carnitas",
            measure: "2 cups"
          },
          {
            ingredientName: " corn",
            measure: ""
          },
           {
            ingredientName: " black beans",
            measure: ""
          }
        ],
      },
      {
        idCategory: "7",
        idFood:'30',
        recipeInstructions:"Combine the Pork Carnitas, corn, black beans, capsicum and 1 1/2 cups of enchilada sauce in a bowl. Mix to combine.Line the baking dish with tortillas. I find the best way to do this is to cut the tortillas in half, place 2 on the baking dish (with the straight cut side lined to the edge of the baking dish), then cut 1 tortilla into 6 to 8 pieces and use those wedges to fill the gaps.Top with a third and final layer of tortillas. Spread remaining enchilada sauce (3/4 cup) across the top, then sprinkle with mozzarella cheese. Bake for 20 to 25 minutes until the cheese is melted and started to turn golden. ",
        category:'Pork',
        recipeName: "Slow-Roasted Pork & Peppers",
  
        recipeImage: "https://hips.hearstapps.com/hmg-prod/images/slow-roasted-pork-and-peppers1-1661979341.jpg?crop=0.448xw:1.00xh;0.331xw,0&resize=980:*",
        recipeId: "pork_3",
        recipeCategory: "Pork",
        recipeOrigin: "Mexican",
        cookingDescription: " There's very little prep for this simple dinner—it's just a matter of halving bell peppers and cutting onions into wedges, then the oven does the rest of the work, transforming the boneless pork shoulder into meltingly tender meat.",
        recipeTags: "Pork, Lasagna",
        ingredients: [
          {
            ingredientName: "boneless pork shoulder",
            measure: " "
          },
          {
            ingredientName: "2 red onions, cut into 8 wedges each",
            measure: "2 cups"
          },
          {
            ingredientName: " red, yellow, or orange bell peppers",
            measure: ""
          },
           {
            ingredientName: "fennel seed, choppedKosher sal    Freshly ground black pepper",
           measure: ""
          }
        ],
      },
      {
        idCategory: "8",
        idFood:'31',
        recipeInstructions:" Place a large non-stick pan on a medium-high heat with 1 tablespoon of olive oil. Add the garlic, chilli and 1 tablespoon of baby capers, cook for 1 minute, then add the clams and mussels. Cook for a couple of minutes, then add the squid, scallops, lemon zest and parsley, and give it a good stirScrunch in 1 x 400g tin of plum tomatoes through your clean hands, bring to the boil, then reduce the heat and simmer for 2 minutes to let the flavours mingle, stirring regularly and breaking up the tomatoes.",
        category:'Seafood',
        recipeName: "seafood pasta",
  
        recipeImage: "https://asset.jamieoliver.com/images/cq7w2e71/production/ac61bb0979794c561e01079658f2d7a5c2e722f4-958x1280.jpg/134449920?rect=0,2,958,1277&w=1920&h=2560&fm=webp&q=80&fit=crop&auto=format",
        recipeId: "seafood_1",
        recipeCategory: "Seafood",
        recipeOrigin: "Spain",
        cookingDescription: " Cook 300g of dried linguine in a large pan of boiling salted water according to the packet instructions, then drain, reserving a mugful of starchy water.",
        recipeTags: "seafood",
        ingredients: [
          {
            ingredientName: "squid, gutted, cleaned, from sustainable sources",
            measure: "250g "
          },
          {
            ingredientName: "mussels, scrubbed, debearded, from sustainable sources ",
            measure: "250g"
          },
          {
            ingredientName: " dried linguine",
            measure: "3000g"
          },
           {
            ingredientName: " Parmesan cheese",
            measure: "20g"
          }
        ],
      },
      {
        idCategory: "8",
        idFood:'32',
        recipeInstructions:"Preheat the grill to high. Slice the bread 1cm thick, then cut into 3cm chunks and place in a large bowl with the prawns. Drain the peppers, slice 3cm thick lengthways, and add to the bowl. Peel the garlic. Finely chop 1 clove and add to the bowl, then finely slice the other 2 and put aside. Finely chop the parsley, stalks and all, and add to the mix. Finely grate in the lemon zest, squeeze in half the juice, add 1 tablespoon of olive oil and a pinch of black pepper, and mix well. Take pride in skewering up the prawns and bread on 2 skewers, interlacing with the peppers, and don’t pack it all on too tightly. Sit each skewer across a roasting tray and grill for 6 to 8 minutes, turning halfway – keep an eye on them! Meanwhile, put a non-stick frying pan on a medium heat with ½ a tablespoon of olive oil and the sliced garlic. Stir regularly for 2 minutes, or until lightly golden, then pour in the tinned tomatoes to bubble away until the skewers are ready, squashing a few with the back of your spoon. Add a squeeze of lemon juice, then season the sauce to perfection. Serve the kebabs on top of the sauce, sprinkled with feta and black pepper, then finish with 1 teaspoon of extra virgin olive oil. ",
        category:'Seafood',
        recipeName: "Garlic prawn kebabs",
  
        recipeImage: "https://asset.jamieoliver.com/images/cq7w2e71/production/31b0f2c1f6f4fd40299223ebb8ae3b3cb968f870-958x1280.jpg/109386576?rect=0,2,958,1277&w=1920&h=2560&fm=webp&q=80&fit=crop&auto=format",
        recipeId: "seafood_2",
        recipeCategory: "Seafood",
        recipeOrigin: "Spain",
        cookingDescription: " Delicious Spanish-inspired garlic prawn kebabs with roasted peppers, served over a rich tomato sauce and topped with feta.",
        recipeTags: "seafood",
        ingredients: [
            {
                "ingredientName": "large raw prawns, peeled and deveined",
                "measure": "250g"
              },
              {
                "ingredientName": "crusty bread (like ciabatta or baguette)",
                "measure": "100g"
              },
              {
                "ingredientName": "roasted red peppers, drained",
                "measure": "1 jar (about 200g)"
              },
              {
                "ingredientName": "garlic cloves",
                "measure": "3 cloves"
              },
              {
                "ingredientName": "fresh parsley",
                "measure": "1 small bunch"
              },
              {
                "ingredientName": "lemon, zest and juice",
                "measure": "1"
              },
              {
                "ingredientName": "olive oil",
                "measure": "1.5 tablespoons"
              },
              {
                "ingredientName": "black pepper",
                "measure": "to taste"
              },
              {
                "ingredientName": "tinned tomatoes",
                "measure": "1 can (400g)"
              },
              {
                "ingredientName": "feta cheese",
                "measure": "50g"
              },
              {
                "ingredientName": "extra virgin olive oil",
                "measure": "1 teaspoon"
              }
        ],
      },
      {
        idCategory: "9",
        idFood:'33',
        recipeInstructions:"Toss the raw mushrooms with olive oil first. Then add the minced and whole garlic cloves, thyme, salt and pepper. Toss again.Use a large roasting pan – easier for tossing than a baking tray. The mushrooms can be very, very snug in a single layer. They will shrink about 30%.Roast for 35 minutes at 200°C/400°F (180°C fan-forced), tossing during the halfway mark, until browned and soft but still juicy inside. Don’t roast them for so long that they become shrivelled and sad!Marinade – Immediately pour all the mushrooms and juices in the pan into a large bowl. Then add the balsamic vinegar and more olive oil, then toss, toss, toss!Marinate – Leave the bowl uncovered (we don’t want condensation diluting the flavour!) and let the mushrooms marinate as they cool, tossing once (or twice or three times!). It will take about 2 hours to come to room temperature and that’s enough time for the mushrooms to absorb sufficient flavour to serve / start picking at for a “taste test”.😈However, if you have the time, refrigerate and leave them overnight! They will absorb even more flavour.Serve at room temperature or slightly warm for maximum appreciation of flavour! It really brings out the garlic and thyme flavour when slightly warmed. ",
        category:'Side',
        recipeName: "Balsamic marinated mushrooms",
  
        recipeImage: "https://www.recipetineats.com/tachyon/2023/07/Balsamic-marinated-mushrooms_8.jpg?resize=900%2C1125&zoom=0.72",
        recipeId: "side_1",
        recipeCategory: "Side",
        recipeOrigin: "Turkiye",
        cookingDescription: " use smaller mushrooms around 3 – 3.5cm wide (1.2 – 1.4″) so I can keep them whole for maximum effect of biting into a juicy mushroom.",
        recipeTags: "Mushrooms",
        ingredients: [
          {
            ingredientName: " small whole white mushrooms ",
            measure: " 700g"
          },
          {
            ingredientName: "extra virgin olive oil",
            measure: "3tbsp"
          },
          {
            ingredientName: " cooking/kosher salt",
            measure: "2tbsp"
          },
           {
            ingredientName: " garlic cloves",
            measure: "4"
          }
        ],
      },
      {
        idCategory: "9",
        idFood:'34',
        recipeInstructions:"Cook eggplant: Heat 2 tbsp oil in a large skillet over medium high heat. Add eggplant and cook for 4 to 5 minutes, stirring regularly, until it's golden on the surface but still somewhat firm and raw inside. Transfer to a large pot.Cook onion and garlic: In the same skillet, add another 1 tbsp olive oil. Add onion and garlic with a pinch of the salt. Cook for 3 minutes until onion is soft with a hint of golden on the edges. Add to pot holding eggplant.Cook capsicum: Add another 1 tbsp of olive oil and cook the capsicum with a pinch of salt for 3 minutes. It should still be firm inside. You won't get much colour on the capsicum, this is OK. Add to pot.Cook zucchini: Add another 1 tbsp olive oil and cook the zucchini with a pinch of salt for 3 minutes. Make sure it stays firm (ie. raw inside). Like the capsicum, it won't go golden. Add to pot.Add remaining ingredients to pot: Turn the stove under the pot to medium-high. Add tomato, thyme, olives, remaining salt and all the pepper, and mix. Once the mixture is hot, reduce heat to a low simmer.Braise: Cook for 20 – 25 minutes with the pot lid off, stirring every now and then, until all the vegetables are cooked through and the liquid has reduced. The mixture should be thick enough so you can pile it on a plate (ie. not watery), but still very moist and juicy.Basil and salt: Taste and add more salt if needed; vegetables can taste bland if not enough salt is added. Stir through basil then serve immediately, drizzled with extra virgin olive oil and a sprinkle of extra basil on top, if desired. Serve as a main with crusty bread, or as a side dish. See above recipe card for more ideas! ",
        category:'Side',
        recipeName: "Ratatouille – French Vegetable Stew",
  
        recipeImage: "https://www.recipetineats.com/tachyon/2021/04/Ratatouille_0.jpg?resize=900%2C1260&zoom=0.72",
        recipeId: "side_2",
        recipeCategory: "Side",
        recipeOrigin: "french",
        cookingDescription: " Ratatouille is one of those fabulous dishes that can be served either as a main or side dish. It also happily keeps for days, being meat and dairy-free. In fact, the pictured Ratatouille was consumed by me over the course of 5 days in various forms",
        recipeTags: "stew",
        ingredients: [
          {
            ingredientName: " eggplant (aubergine) , cut into 2cm ",
            measure: " "
          },
          {
            ingredientName: " tomatoes",
            measure: "3"
          },
          {
            ingredientName: " extra virgin olive oil",
            measure: "6tbsp"
          },
           {
            ingredientName: " capsicum (1 red, 1 yellow),",
            measure: ""
          },
          {
            ingredientName: " zucchinis (courgettes)",
            measure: ""
          },
          {
            ingredientName: "fresh thyme leaves ",
            measure: ""
          },
        ],
      },
      {
        idCategory: "10",
        idFood:'35',
        recipeInstructions:" step 1 To make the dressing, whisk all the ingredients together in a bowl and set aside.step 2 Toss the tomatoes and melon together in a bowl with a little dressing, some sea salt and black pepper. Loosely lay the prosciutto over a platter and pile the tomatoes and melon on top. Drizzle with extra dressing, scatter with mint and serve straight away with crusty bread.",
        category:'Starter',
        recipeName: "Minted melon, tomato & prosciutto salad",
  
        recipeImage: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/minted-melon-tomato-prosciutto-salad-b425152.jpg?quality=90&webp=true&resize=375,341",
        recipeId: "starter_1",
        recipeCategory: "Starter",
        recipeOrigin: "germany",
        cookingDescription: "Quality produce makes this dish, Charentais melon, heirloom tomatoes and salty prosciutto marry beautifully. Ideal as a sharing platter starter for a summer dinner party ",
        recipeTags: "Vegan",
        ingredients: [
          {
            ingredientName: "different-coloured heirloom tomatoes",
            measure: " 500g"
          },
          {
            ingredientName: "Charentais melon",
            measure: ""
          },
          {
            ingredientName: " slices prosciutto",
            measure: "12"
          },
           {
            ingredientName: " olive oil",
            measure: "3tbsp"
          }
        ],
      },
      {
        idCategory: "10",
        idFood:'36',
        recipeInstructions:"Bring the stock to a simmer over a low heat.Peel and finely slice the onions and garlic. Melt a good knob of butter with 2 tablespoons of olive oil in a large ovenproof casserole pan over a medium-high heat. Stir in the garlic, then tip in the onions, season well with sea salt and black pepper, stir, then turn the heat up slightly.Tie the herbs together with a length of string to make a bouquet garni, then add to the pan, tying the end of the string to the pan’s handle so you can easily fish it out later.Turn the heat down to medium. Make a cartouche with a piece of greaseproof paper and place directly onto the onions. Cook the onions for 40 minutes, or until soft, sticky and caramelised, removing the cartouche halfway through and stirring occasionally.Pour in the IPA to deglaze the pan, using a wooden spoon to scrape up all the nice sticky bits, then let it bubble away and pour in the hot stock. Bring to the boil, then turn the heat down and simmer for 5 to 10 minutes. Remove the bouquet garni.Preheat the grill to maximum. Toast your bread on both sides, then spread one side with a knob of butter and mustard. Slice, grate or crumble the cheeses, then divide up and use to generously top the toasts, then cut them into large pieces and place them in one layer directly onto the soup, pushing them down slightly to allow them to soak up the soup. Grate over a little extra cheese, and finish with a shake of Worcestershire sauce.Place the pan under the grill for 5 to 10 minutes until the cheese is melted, bubbling and golden, and the bread is crispy and delicious – keep an eye on it to make sure it doesn’t burn! Divide between bowls and enjoy with a drizzle of extra virgin olive oil. ",
        category:'Starter',
        recipeName: "Cheesy onion soup",
  
        recipeImage: "https://asset.jamieoliver.com/images/cq7w2e71/production/b4472991cb98c4c6d7a92cdc9eb7cc6857f830e6-958x1280.jpg/159996238?rect=0,2,958,1277&w=1920&h=2560&fm=webp&q=80&fit=crop&auto=format",
        recipeId: "starter_2",
        recipeCategory: "Starter",
        recipeOrigin: "british",
        cookingDescription: "Bring the stock to a simmer over a low heat. Peel and finely slice the onions and garlic. Melt a good knob of butter with 2 tablespoons of olive oil in a large ovenproof casserole pan  ",
        recipeTags: "Vegan",
        ingredients: [
          {
            ingredientName: "quality organic chicken, beef, or vegetable stock",
            measure: "2.5 litres "
          },
          {
            ingredientName: " mixed-colour onions",
            measure: "2kg"
          },
          {
            ingredientName: "bunch of mixed herbs, such as sage, thyme, rosemary, bay",
            measure: "20g"
          },
           {
            ingredientName: " olive oil",
            measure: "3tbsp"
          }
        ],
      },
      {
        idCategory: "11",
        idFood:'37',
        recipeInstructions:"step 1 Heat 1 tbsp sesame oil in a wide-based pan with a tight-fitting lid.step 2 Add 1 finely chopped red onion and cook over a low heat for 10 mins, stirring occasionally, until softened. step 3 Add 1 crushed garlic clove, a finely chopped thumb-sized piece of ginger and 1 finely chopped red chilli, cook for 1 min, then add 1½ tsp ground turmeric and 1½ tsp ground cumin and cook for 1 min more.step 4 Turn up the heat to medium, add 2 sweet potatoes, cut into even chunks, and stir everything together so the potato is coated in the spice mixture.step 5 Tip in 250g red split lentils, 600ml vegetable stock and some seasoning.step 6 Bring the liquid to the boil, then reduce the heat, cover and cook for 20 mins until the lentils are tender and the potato is just holding its shape.step 7 Taste and adjust the seasoning, then gently stir in the 80g spinach. Once wilted, top with the 4 diagonally sliced spring onions and ½ small pack torn basil leaves to serve.step 8 Alternatively, allow to cool completely, then divide between airtight containers and store in the fridge for a healthy lunchbox. ",
        category:'Vegan',
        recipeName: "Spinach, sweet potato & lentil dhal",
  
        recipeImage: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/spinach-sweet-potato-and-lentil-dhal-be8fae5.jpg?quality=90&webp=true&resize=375,341",
        recipeId: "vegan_1",
        recipeCategory: "Vegan",
        recipeOrigin: "Spanish",
        cookingDescription: " A comforting vegan one-pot recipe that counts for 3 of your 5-a-day! You can't go wrong with this iron-rich, low-fat, low-calorie supper",
        recipeTags: "vegan",
        ingredients: [
          {
            ingredientName: "sesame oil",
            measure: " "
          },
          {
            ingredientName: "red onion",
            measure: ""
          },
          {
            ingredientName: "ground turmeric",
            measure: "1½ tsp"
          },
           {
            ingredientName: "thumb-sized piece ginger",
            measure: ""
          }
        ],
      },
      {
        idCategory: "11",
        idFood:'38',
        recipeInstructions:"step 1 Heat 1 tbsp sesame oil in a wide-based pan with a tight-fitting lid.step 2 Add 1 finely chopped red onion and cook over a low heat for 10 mins, stirring occasionally, until softened. step 3 Add 1 crushed garlic clove, a finely chopped thumb-sized piece of ginger and 1 finely chopped red chilli, cook for 1 min, then add 1½ tsp ground turmeric and 1½ tsp ground cumin and cook for 1 min more.step 4 Turn up the heat to medium, add 2 sweet potatoes, cut into even chunks, and stir everything together so the potato is coated in the spice mixture.step 5 Tip in 250g red split lentils, 600ml vegetable stock and some seasoning.step 6 Bring the liquid to the boil, then reduce the heat, cover and cook for 20 mins until the lentils are tender and the potato is just holding its shape.step 7 Taste and adjust the seasoning, then gently stir in the 80g spinach. Once wilted, top with the 4 diagonally sliced spring onions and ½ small pack torn basil leaves to serve.step 8 Alternatively, allow to cool completely, then divide between airtight containers and store in the fridge for a healthy lunchbox. ",
        category:'Vegan',
        recipeName: "Roasted aubergine & tomato curry",
  
        recipeImage: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/roasted-aubergine-tomato-curry-cec6925.jpg?quality=90&webp=true&resize=375,341",
        recipeId: "vegan_2",
        recipeCategory: "Vegan",
        recipeOrigin: "Mongolian",
        cookingDescription: " A comforting vegan one-pot recipe that counts for 3 of your 5-a-day! You can't go wrong with this iron-rich, low-fat, low-calorie supper",
        recipeTags: "vegan",
        ingredients: [
          {
            ingredientName: " aubergine, or baby aubergines",
            measure: "600g "
          },
          {
            ingredientName: "red onion",
            measure: ""
          },
          {
            ingredientName: "coconut milk",
            measure: "500ml"
          },
           {
            ingredientName: "thumb-sized piece ginger",
            measure: ""
          }
        ],
      },
  ]);

  const handleChangeCategory = (category) => {
    setActiveCategory(category);
  };

  // Filter foods by active category during rendering
  const filteredfoods = allFood.filter(
    (food) => food.category === activeCategory
  );

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        testID="scrollContainer"
      >
        <View style={styles.headerContainer} testID="headerContainer">
        <Image
            source={{uri:'https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png'}}
            style={styles.avatar}
          />
          <Text style={styles.greetingText}>Hello, User!</Text>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Make your own food,</Text>
          <Text style={styles.subtitle}>
            stay at <Text style={styles.highlight}>home</Text>
          </Text>
        </View>

        <View testID="categoryList">
        <Categories
              categories={categories}
              activeCategory={activeCategory}
              handleChangeCategory={handleChangeCategory}
            />
        </View>

        <View testID="foodList">
        <Recipe foods={filteredfoods} categories={categories} />
          </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF", // white
  },
  scrollContainer: {
    paddingBottom: 50,
    paddingTop: hp(14), // pt-14 equivalent
  },
  headerContainer: {
    marginHorizontal: wp(4), // mx-4 equivalent
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp(2),
    marginTop: hp(-8.5),
  },
  avatar: {
    height: hp(5),
    width: hp(5.5),
  },
  greetingText: {
    fontSize: hp(1.7),
    color: "#52525B", // neutral-600
    fontWeight: "600", // font-semibold
    backgroundColor: "#F3F4F6", // gray-100
    paddingHorizontal: wp(2), // px-2
    paddingVertical: hp(0.5), // py-1
    borderRadius: 9999, // full rounded
    textAlign: "center",
  },
  titleContainer: {
    marginHorizontal: wp(4), // mx-4
    marginBottom: hp(2), // mb-2
  },
  title: {
    fontSize: hp(3.8),
    fontWeight: "600", // font-semibold
    color: "#52525B", // neutral-600
  },
  subtitle: {
    fontSize: hp(3.8),
    fontWeight: "600", // font-semibold
    color: "#52525B", // neutral-600
  },
  highlight: {
    color: "#F59E0B", // amber-400
  },
});
