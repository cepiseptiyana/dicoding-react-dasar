// third-party module
import React from "react";
import { render, screen } from "@testing-library/react";
import { getByText, waitFor, fireEvent } from "@testing-library/dom";
import "@testing-library/jest-dom";

// core module
import Notes from "../pages/Notes";

test("test cek apakah card arsip ada", async () => {
  render(<Notes />);
  //   click arip
  const btn_index_0 = screen.getByTestId("data-btn-0");
  fireEvent.click(btn_index_0);
  //   assert
  const card_list = await screen.findByTestId("data-liste");
  expect(card_list).toBeInTheDocument();
});

test("test delete arsip", async () => {
  render(<Notes />);
});
