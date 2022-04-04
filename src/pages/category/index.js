import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../../component/loader/Loader";
import Navbar from "../../component/navbar/Navbar";
import { CategoryContainer } from "./category.style";
import { CatArray } from "./catList";

const Category = ({ Name }) => {
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [Loading]);

  return (
    <div>
      {Loading ? (
        <Loader />
      ) : (
        <div className="home">
          <CategoryContainer>
            <Navbar Name={Name} />
            <div className="category--details">
              {CatArray.map((item) => {
                return (
                  <Link key={item.id} to={item.path}>
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </CategoryContainer>
        </div>
      )}
    </div>
  );
};

export default Category;
