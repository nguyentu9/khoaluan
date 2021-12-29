import { rest } from "msw";
import { jobTitles } from "../dummy-data";
export const handlers = [
    rest.get("/api/jobtitles", (req, res, ctx) => {
        return res(ctx.json(jobTitles));
    }),
];
