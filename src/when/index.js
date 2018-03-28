import { When } from "cucumber";

import { applyStepDefinitions } from "../support/utils";

import stepDefinitions from "./definitions";

applyStepDefinitions(When, stepDefinitions);
