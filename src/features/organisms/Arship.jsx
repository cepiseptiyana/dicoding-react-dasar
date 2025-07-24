import React from "react";

// atoms
import Heading from "../Fragments/Heading";

// organisms
import CardNotes from "./CardNotes";
import CardArsip from "./CardArsip";

function Arship(props) {
  const {
    filterInitialData,
    showDataArship,
    handleDeleteNotes,
    handleAddNotesArship,
    handleDeleteNotesArship,
  } = props;

  const heading = {
    className: "text-white text-2xl p-2",
  };

  return (
    <>
      <section className="NotebookList pt-10">
        <div className="lg:w-[70%] md:w-[80%] w-[90%] m-auto">
          <div>
            <Heading className={heading.className} text="Catatan Aktif" />
            <CardNotes
              filterInitialData={filterInitialData}
              handleDeleteNotes={handleDeleteNotes}
              handleAddNotesArship={handleAddNotesArship}
            />
          </div>

          <div>
            <Heading className={heading.className} text="Arship" />
            <CardArsip
              showDataArship={showDataArship}
              handleDeleteNotesArship={handleDeleteNotesArship}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Arship;
