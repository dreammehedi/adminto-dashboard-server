import { Schema, model } from "mongoose";

// calendar schema is
const calendarSchema = new Schema(
  {
    title: { type: String, required: true },
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    allDay: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Calendar Events Collection
const CalendarEvents = model(
  "Calendar-Events",
  calendarSchema,
  "CalendarEvents"
);

export default CalendarEvents;
