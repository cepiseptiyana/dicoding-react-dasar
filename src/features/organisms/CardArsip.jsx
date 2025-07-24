import React from "react";

// atoms
import Heading from "../Fragments/Heading";
import Paragraph from "../Fragments/Paragraph";
import Button from "../Fragments/Button";

function CardArsip({ showDataArship, handleDeleteNotesArship }) {
  const className = {
    classBtn:
      "w-[100%] text-red-500 border-r-1 border-white cursor-pointer hover:text-red-600 border-t-1 border-white absolute bottom-0",
    classList:
      "NotebookList_list relative w-[300px] border border-white rounded-md text-white pb-10",
  };

  const list = showDataArship.map((note) => {
    return (
      <li key={note.id} className={className.classList} data-testid="data-list">
        <Heading className="p-2 pt-3 pb-0" text={note.title} />
        <Paragraph className="p-2 pt-0 pb-0" text={note.createdAt} />
        <Paragraph className="p-2 pt-0" text={note.body} />
        <Button
          onClick={() => handleDeleteNotesArship(note.id)}
          className={className.classBtn}
          text="Delete"
        />
      </li>
    );
  });

  if (showDataArship.length != 0) {
    return (
      <ul
        data-testid="arsip_list"
        className="NotebookList--order flex xl:justify-start justify-center flex-wrap gap-3"
      >
        {list}
      </ul>
    );
  }

  return (
    <Heading
      className="text-white text-center capitalize"
      text="tidak ada arsip"
    />
  );
}

export default CardArsip;
