import moment from "moment";

export interface DayInWeek {
  day: moment.Moment;
  isBefore: boolean;
  isAfter: boolean;
}

export interface Week {
  days: DayInWeek[];
}

export const getWeeksInMonth = (
  month: moment.Moment,
  isScheduled?: number
): Week[] => {
  const weeks: Week[] = [];
  const startOfMonth = moment(month).startOf("month");
  const endOfMonth = moment(month).endOf("month");
  const startOfWeek = startOfMonth.clone().startOf("week");
  const endOfWeek = endOfMonth
    .clone()
    .endOf("week")
    .add(isScheduled ? isScheduled : 0, "week");

  let currentDay = startOfWeek.clone();
  let currentWeek: Week = { days: [] };

  while (currentDay.isSameOrBefore(endOfWeek)) {
    if (currentDay.isBefore(startOfMonth)) {
      currentWeek.days.push({
        day: currentDay.clone(),
        isBefore: true,
        isAfter: false,
      });
    } else if (currentDay.isAfter(endOfMonth)) {
      currentWeek.days.push({
        day: currentDay.clone(),
        isBefore: false,
        isAfter: false,
      });
    } else {
      currentWeek.days.push({
        day: currentDay.clone(),
        isBefore: false,
        isAfter: true,
      });
    }

    if (currentDay.day() === 6) {
      weeks.push(currentWeek);
      currentWeek = { days: [] };
    }

    currentDay.add(1, "day");
  }

  return weeks;
};
