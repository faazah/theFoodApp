export const Navbar = ({ filterCategory, categoryList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {categoryList.map((item, i) => {
            return (
              <button
                className="btn-group__item"
                key={i}
                onClick={() => filterCategory(item)}
              >
                {item}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};
