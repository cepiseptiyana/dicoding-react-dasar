import React from "react";
import Notes from "./features/pages/Notes";

import { createRoot } from "react-dom/client";

// css
import "./style/main.css";

const root = createRoot(document.getElementById("root"));
root.render(<Notes />);
