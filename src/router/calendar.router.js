import express from "express";
import { getCalendarEventsData } from "../controllers/calendar.controller.js";

const calendarRouter = express.Router();

calendarRouter.get("/calendar", getCalendarEventsData);

export default calendarRouter;
