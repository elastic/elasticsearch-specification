class ScheduleContainer {
  cron: CronExpression
  daily: DailySchedule
  hourly: HourlySchedule
  interval: Interval
  monthly: TimeOfMonth[]
  weekly: TimeOfWeek[]
  yearly: TimeOfYear[]
}
