import * as React from "react";
import { render } from "react-dom";

import App from "./App";
import PropsLearning from "./PropsLearning";
import StatePropsLearning from "./StatePropsLearning";

const rootElement = document.getElementById("root");
render(<StatePropsLearning />, rootElement);
