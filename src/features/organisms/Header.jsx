import { useEffect, useState } from "react";

// ! Fragments
import Heading from "../Fragments/Heading.jsx";
import Input from "../Fragments/Input.jsx";

function Header({ handleSearch }) {
  const [search, setSearch] = useState("");

  // ! HandleSearch
  useEffect(() => {
    handleSearch(search);
  }, [search]);

  const classHeader =
    "bg-blue-950 font-sans flex items-center justify-between py-5 px-8 border-b-2 border-solid border-white";
  const classHeading = "text-white md:text-5xl text-3xl";
  const classInput =
    "sm:w-[300px] w-[45%] text-white border-1 border-solid p-2 rounded-sm";

  return (
    <div className={classHeader}>
      <Heading className={classHeading} text="Notes" />
      <Input
        value={search}
        onChange={(event) => {
          const value = event.target.value;
          setSearch(value);
        }}
        className={classInput}
        type="text"
        placeholder="Cari catatan ..."
      />
    </div>
  );
}

export default Header;
