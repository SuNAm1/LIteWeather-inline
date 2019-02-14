const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const shortDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

export const getDay = (date = null) => days[new Date(date).getDay()];

export const getMonth = () => months[new Date().getMonth()];

export const getInlineTheme = function(date, isDay, section) {
  if (section == "card") return isDay ? "card-day" : "card-night";
};

export const getShortDay = (date = null) => shortDays[new Date(date).getDay()];
