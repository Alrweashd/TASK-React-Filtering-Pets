import React from "react";

function Search({ search }) {
  return (
    <>
      <div className="input-group rounded">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          name="serbiuhi"
          onChange={search}
        />
      </div>{" "}
    </>
  );
}

export default Search;
