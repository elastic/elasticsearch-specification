class CatPendingTasksRecord implements ICatRecord {
	@prop_serializer("NullableStringIntFormatter")
	insertOrder: integer;
	priority: string;
	source: string;
	timeInQueue: string;
}
