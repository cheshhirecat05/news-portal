import React from "react";

function Categories() {
  const categories = ["Technology", "Sports", "Health", "Politics", "Business"];
  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((cat, i) => (
          <li key={i}>{cat}</li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
