// controllers/calendar.controller.js

import CalendarEvents from "../models/calendar.model.js";

// get calendar events data
const getCalendarEventsData = async (req, res) => {
  // get calendar events
  const result = await CalendarEvents.find();

  // send response in client request
  res.json({
    success: true,
    message: "Calendar Events Data Get Successfully.",
    payload: result,
  });
};

// get calendar events data
const postCalendarEventsData = async (req, res) => {
  // get calendar event data
  const newEventData = req.body;
  const result = await CalendarEvents.insertMany(newEventData);

  // send response in client request
  res.json({
    success: true,
    message: "Calendar Events Data Inserted Successfully.",
    payload: result,
  });
};
export { getCalendarEventsData, postCalendarEventsData };
