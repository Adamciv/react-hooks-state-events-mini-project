import React from "react";

function CategoryFilter({ categories,selectedCat, handleCat }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((cat) => (
        <button 
        key={cat} 
        className={cat === selectedCat ? "selected" : ""}
        onClick={() => handleCat(cat)}

        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
