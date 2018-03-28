import { Given } from "cucumber";

import { applyStepDefinitions } from "../support/utils";

import stepDefinitions from "./definitions";

applyStepDefinitions(Given, stepDefinitions);
