import express from "express";
import {
  getCalendarEventsData,
  postCalendarEventsData,
} from "../controllers/calendar.controller.js";

const calendarRouter = express.Router();

calendarRouter.get("/calendar", getCalendarEventsData);
calendarRouter.post("/calendar", postCalendarEventsData);

export default calendarRouter;
