import React from "react";

const Credit = () => {
  const year = new Date().getFullYear();
  return (
    <div className="credit">
      <div>Created by Garic Poon @ 2020</div>
      <div>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  );
};

export default Credit;
