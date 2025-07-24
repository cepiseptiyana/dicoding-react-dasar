import React from "react";

// Organisms
import Header from "../organisms/Header";

function MainLayout(props) {
  const { children, handleSearch } = props;
  const classMain = "bg-linear-to-b from-blue-950 to-indigo-950";

  return (
    <>
      <header>
        <Header handleSearch={handleSearch} />
      </header>

      <main className={classMain}>{children}</main>
    </>
  );
}

export default MainLayout;
