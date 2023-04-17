const currentDate = new Date();
const dateFormatter = (date) => {
  const milliSecondsBetweenDates = currentDate - date;
  const daysBetweenDates = Math.floor(
    milliSecondsBetweenDates / (1000 * 60 * 60 * 24)
  );
  if (daysBetweenDates < 7) {
    if (daysBetweenDates === 0) {
      return "Today";
    } else if (daysBetweenDates === 1) {
      return "Yesterday";
    } else {
      return `${daysBetweenDates} days ago`;
    }
  }

  const weeksBetweenDates = Math.floor(daysBetweenDates / 7);
  if (weeksBetweenDates < 4) {
    return `${weeksBetweenDates} ${
      weeksBetweenDates > 1 ? "weeks" : "week"
    } ago`;
  }

  const monthsBetweenDates = Math.floor(weeksBetweenDates / 4);
  if (monthsBetweenDates < 12) {
    return `${monthsBetweenDates} ${
      monthsBetweenDates > 1 ? "months" : "month"
    } ago`;
  }

  const yearsBetweenDates = Math.floor(weeksBetweenDates / 12);
  return `${yearsBetweenDates} ${
    yearsBetweenDates > 1 ? "months" : "month"
  } ago`;
};
export default dateFormatter;
