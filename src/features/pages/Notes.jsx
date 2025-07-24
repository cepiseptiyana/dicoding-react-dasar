import React from "react";
import { useState } from "react";

// ! Layouts
import MainLayout from "../layouts/MainLayout.jsx";

// ! organisms
import Form from "../organisms/Form.jsx";
import Arship from "../organisms/Arship.jsx";

// ! Data
import { dataArship } from "../../data/dataArship.js";
import { getInitialData } from "../../data/getInitialData.js";

function Notes() {
  const [initialData, setInitialData] = useState(getInitialData());
  const [showDataArship, setDataArship] = useState(dataArship);
  const [inputSearch, setInputSearch] = useState("");

  // ! HandleAddNotes
  function handleAddNotes(newData) {
    const newNotesArr = [...initialData, newData];
    setInitialData(newNotesArr);
  }

  // ! HandleDeleteNotes
  function handleDeleteNotes(id) {
    const newNotesArr = initialData.filter((data) => {
      return data.id !== id;
    });
    setInitialData(newNotesArr);
  }

  // ! HandleAddNotesArship
  function handleAddNotesArship(newData) {
    // ! find id of dataArship
    const existingNote = showDataArship.find((note) => note.id === newData.id);
    if (existingNote) {
      alert("ID sudah ada");
      return;
    }
    setDataArship([...showDataArship, newData]);
  }

  // ! HandleDeleteNotesArship
  function handleDeleteNotesArship(id) {
    const newNotesArsip = showDataArship.filter((data) => {
      return data.id !== id;
    });
    setDataArship(newNotesArsip);
  }

  // ! HandleSearch
  function handleSearch(title) {
    setInputSearch(title);
  }

  // ! Filter Data
  const filterInitialData = initialData.filter((data) => {
    return data.title.toLowerCase().includes(inputSearch.toLowerCase());
  });

  return (
    <div>
      {/* Layout */}
      <MainLayout handleSearch={handleSearch}>
        <Form handleAddNotes={handleAddNotes} />
        <Arship
          filterInitialData={filterInitialData}
          showDataArship={showDataArship}
          handleAddNotesArship={handleAddNotesArship}
          handleDeleteNotes={handleDeleteNotes}
          handleDeleteNotesArship={handleDeleteNotesArship}
        />
      </MainLayout>
    </div>
  );
}

export default Notes;
