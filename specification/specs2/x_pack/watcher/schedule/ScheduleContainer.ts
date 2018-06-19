class ScheduleContainer {
	hourly: HourlySchedule;
	daily: DailySchedule;
	weekly: TimeOfWeek[];
	monthly: TimeOfMonth[];
	yearly: TimeOfYear[];
	cron: CronExpression;
	interval: Interval;
}
