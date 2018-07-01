@class_serializer("IntervalJsonConverter")
class Interval extends ScheduleBase {
	factor: long;
	unit: IntervalUnit;
}
