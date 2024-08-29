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

export { getCalendarEventsData };
