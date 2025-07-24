import React, { useState } from "react";

// ! Fragments
import Heading from "../Fragments/Heading";
import Paragraph from "../Fragments/Paragraph";
import Input from "../Fragments/Input";
import Textarea from "../Fragments/Textarea";
import Button from "../Fragments/Button";

// ! Data
import { showFormattedDate } from "../../data/getInitialData";

function Form(props) {
  let maxLength = 50;

  const { handleAddNotes } = props;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [karakter, setKarakter] = useState(50);

  const onSubmit = (event) => {
    event.preventDefault();
    const now = new Date();
    const newData = {
      id: +new Date(),
      title: title,
      body: body,
      archived: false,
      createdAt: showFormattedDate(now),
    };

    handleAddNotes(newData);
  };

  return (
    <>
      <section className="notebookForm pt-10">
        <form
          onSubmit={(event) => onSubmit(event)}
          className="font-sans text-white capitalize lg:w-[500px] md:w-[60%] sm:w-[75%] w-[93%] m-auto"
        >
          <Heading text="Buat catatan" className="text-start text-2xl" />
          <Paragraph
            text={"Skor karakter :" + karakter}
            className="text-end md:text-base text-sm"
          />

          <div className="flex flex-col gap-4">
            <Input
              value={title}
              className="border text-sm border-white p-1 rounded-sm"
              placeholder="buat judul catatan"
              onChange={(event) => {
                if (karakter <= 0) {
                  alert("Karakter melebihi batas");
                  return;
                }

                setTitle(event.target.value);
                setKarakter(maxLength - event.target.value.length);
              }}
            />
            <Textarea
              value={body}
              className="h-40 text-sm border border-white p-1 rounded-sm"
              placeholder="buat catatan di sini"
              onChange={(event) => setBody(event.target.value)}
            />
            <Button
              type="submit"
              className="bg-red-500 text-xl cursor-pointer hover:scale-102 duration-300"
              text="Buat"
            />
          </div>
        </form>
      </section>
    </>
  );
}

export default Form;
