import React, { useState, useEffect } from "react";
import Navigation from "../../Templates/Navigation/Navigation";
import { colors, fontWeight, fontSize } from "../../util/theme";
import { Grid } from "@mui/material";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import Text from "../../components/Text/Text";
import { fetchShowComments } from "../../api/userApi";

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

const BlogPage = () => {
  const [comment, setComments] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(0);

  useEffect(() => {
    fetchShowComments().then((data) => {
      const showComments = data.map((comment, index) => ({
        ...comment,
        title: comment.name,
        description: comment.body,
        id: comment.id,
        postId: comment.postId,
      }));
      setComments(showComments);
    });
  }, []);

  const handlePostChange = (event) => {
    setSelectedPostId(parseInt(event.target.value));
  };

  const CategoryTab = () => {
    return (
      <select onChange={handlePostChange}>
        <option value="0">Select</option>
        <option value="1">Comments for post id 1</option>
        <option value="2">Comments for post id 2</option>
        <option value="3">Comments for post id 3</option>
        <option value="4">Comments for post id 4</option>
        <option value="5">Comments for post id 5</option>
        <option value="6">Comments for post id 6</option>
        <option value="7">Comments for post id 7</option>
        <option value="8">Comments for post id 8</option>
        <option value="9">Comments for post id 9</option>
        <option value="10">Comments for post id 10</option>
      </select>
    );
  };

  return (
    <>
      <SimplifiedDiv style={styles.container}>
        <Grid container direction="row" spacing={5}>
          <Grid item md={3} lg={3}>
            <SimplifiedDiv style={styles.headingContainer}>
              <Text style={styles.headingText}>POST ID</Text>
            </SimplifiedDiv>
            <CategoryTab />
          </Grid>
          <Grid item md={9} lg={9}>
            <SimplifiedDiv style={styles.headingContainer}>
              <Text style={styles.headingText}>COMMENTS</Text>
            </SimplifiedDiv>
            {comment
              .filter((c) => c.postId === selectedPostId)
              .map((c) => (
                <div key={c.id}>
                  <p>
                    <b>Title: </b> {c.title}
                  </p>
                  <p>
                    <b>Comment: </b> {c.description}
                  </p>
                </div>
              ))}
          </Grid>
        </Grid>
      </SimplifiedDiv>
    </>
  );
};



export default BlogPage;