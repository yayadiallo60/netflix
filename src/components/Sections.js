import React from "react";
import Title from "./Title";
import Movies from "./Movies";

const Sections = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        return (
          <div className="container">
            <Title title={item.category} />
            <Movies movies={item.images} />
          </div>
        );
      })}
    </>
  );
};

export default Sections;
