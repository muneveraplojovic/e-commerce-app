import React from "react";
import advertisment from "../../assets/images/shop/advertisement.jpg";

const styles = {

  display: "flex",
  margin: " 30px 170px",
};

const AdsPhoto = () => {
  return (
    <div style={{ width: "100%" }}>
      <img src={advertisment} alt="" style={styles} />
    </div>
  );
};

export default AdsPhoto;
