import { Then } from "cucumber";

import { applyStepDefinitions } from "../support/utils";

import stepDefinitions from "./definitions";

applyStepDefinitions(Then, stepDefinitions);
