<<<<<<< HEAD
import { React, useContext, useEffect, useState } from "react";
import Navigation from "../../Templates/Navigation/Navigation";
import banner from "../../assets/images/shop/advertisement.jpg";
import { Grid } from "@mui/material";
import Text from "../../components/Text/Text";
import { fontSize, colors, fontWeight } from "../../util/theme";
import CategoryTab from "../../Templates/CategoryTab/CategoryTab";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import ArticleCard from "../../Templates/ArticleCard/ArticleCard";
import article1 from "../../assets/images/shop/product12.jpg";
import article2 from "../../assets/images/shop/product11.jpg";
import article3 from "../../assets/images/shop/product10.jpg";
import { CartContext } from "../../context/CartContext";
import { generateId } from "../../util/helpers";
import { fetchChangeTitle } from "../../api/userApi";

export const articles = [
  {
    id: generateId(5),
    title: "Article 1",
    description: "Easy Polo Black Edition",
    price: 56,
    qty: 1,
  },
  {
    id: generateId(5),
    title: "Article 2",
    description: "Easy Polo Black Edition",
    price: 56,
    qty: 1,
  },
  {
    id: generateId(5),
    title: "Article 3",
    description: "Easy Polo Black Edition",
    price: 56,
    qty: 1,
  },
];

const ArticlesHomePage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchChangeTitle().then((data) => {
      const updatedArticles = data.map((article, index) => ({
        ...article,
        title: article.title,
        description: article.body,
        id: article.id,
        image: index === 0 ? article1 : index === 1 ? article2 : article3,
        price: 56,
      }));
      setArticles(updatedArticles);
    });
  }, []);

  const { items, setItems } = useContext(CartContext);

  function addArticleHandler(article) {
    let existingIndex = items.findIndex((item) => item.id === article.id);
    if (existingIndex >= 0) {
      setItems(
        items.map((item, index) => {
          if (index === existingIndex) {
            let quantity = item.qty + 1;
            return { ...item, qty: quantity };
          }
          return item;
        })
      );
    } else {
      setItems((prev) => [...prev, article]);
    }
  }

  return (
    <SimplifiedDiv>
      <Grid container direction="row" spacing={3}>
        {articles.slice(0, 3).map((article) => {
          return (
            <Grid item md={4} lg={4}>
              <ArticleCard
                title={article.title}
                description={article.description}
                image={article.image}
                price={article.price}
                article={article}
                onClickButton={(value) => addArticleHandler(value)}
              />
            </Grid>
          );
        })}
      </Grid>
    </SimplifiedDiv>
  );
};

const ShopScreen = () => {
  const styles = {
    container: {
      display: "flex",
      padding: "0px 10%",
    },
    headingContainer: {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      padding: "20px 0px",
    },
    headingText: {
      fontSize: fontSize.medium,
      color: colors.accentColor,
      fontWeight: fontWeight.mediumBold,
    },
  };

  const ProductsHomePage = () => {
    return (
      <SimplifiedDiv style={styles.container}>
        <Grid container direction="row" spacing={5}>
          <Grid item md={3} lg={3}>
            <SimplifiedDiv style={styles.headingContainer}>
              <Text style={styles.headingText}>CATEGORY</Text>
            </SimplifiedDiv>
            <CategoryTab />
          </Grid>
          <Grid item md={9} lg={9}>
            <SimplifiedDiv style={styles.headingContainer}>
              <Text style={styles.headingText}>FEATURED ITEMS</Text>
            </SimplifiedDiv>
            <ArticlesHomePage />
          </Grid>
        </Grid>
      </SimplifiedDiv>
    );
  };

  return (
    <>
      <Navigation />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        marginTop="50px"
      >
        <img src={banner} alt="Advertisement" />
      </Grid>
      <ProductsHomePage />
    </>
  );
};

=======
import React, { useContext } from "react";
import Navigation from "../../Templates/Navigation/Navigation";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";

const ShopScreen = () => {
  const { items } = useContext(CartContext);
  const { user } = useContext(UserContext);

  console.log(items);

  return (
    <>
      <Navigation />
      <div>{user.toString()}</div>
    </>
  );
};

>>>>>>> 6982203694dd57ea6b0bb6b3801b76fbf5242e9d
export default ShopScreen;