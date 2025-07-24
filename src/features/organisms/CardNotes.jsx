// atoms
import Heading from "../Fragments/Heading";
import Paragraph from "../Fragments/Paragraph";
import Button from "../Fragments/Button";

function List({ filterInitialData, handleAddNotesArship, handleDeleteNotes }) {
  const className = {
    classList:
      "relative w-[300px] border border-white rounded-md text-white pb-10",
    classBtn:
      "w-[50%] text-red-500 border-r-1 border-white cursor-pointer hover:text-red-600",
  };

  // List
  const list = filterInitialData.map((note) => (
    <li key={note.id} className={className.classList}>
      <Heading className="p-2 pt-3 pb-0" text={note.title} />
      <Paragraph className="p-2 pt-0 pb-0" text={note.createdAt} />
      <Paragraph className="p-2 pt-0" text={note.body} />

      <div className="w-[100%] flex border-t-1 border-white absolute bottom-0">
        <Button
          onClick={() => handleDeleteNotes(note.id)}
          className={className.classBtn}
          text="Delete"
        />

        <Button
          onClick={() => {
            const newData = { ...note };
            handleAddNotesArship(newData);
          }}
          className="w-[50%] text-yellow-500 cursor-pointer hover:text-yellow-600"
          text="Arsipkan"
        />
      </div>
    </li>
  ));

  return list;
}

function CardNotes({
  filterInitialData,
  handleDeleteNotes,
  handleAddNotesArship,
}) {
  if (filterInitialData.length != 0) {
    return (
      <ul className="NotebookList--order flex xl:justify-start justify-center flex-wrap gap-3">
        <List
          filterInitialData={filterInitialData}
          handleDeleteNotes={handleDeleteNotes}
          handleAddNotesArship={handleAddNotesArship}
        />
      </ul>
    );
  }
  return (
    <Heading
      className="text-white text-center capitalize"
      text="tidak ada catatan"
    />
  );
}

export default CardNotes;
