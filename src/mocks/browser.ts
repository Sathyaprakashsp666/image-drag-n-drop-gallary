import { setupWorker } from "msw/browser";
// @ts-expect-error test
import { handlers } from "./handlers";

export const worker = setupWorker(...handlers);
