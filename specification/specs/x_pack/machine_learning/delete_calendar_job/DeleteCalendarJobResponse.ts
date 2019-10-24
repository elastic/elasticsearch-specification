class DeleteCalendarJobResponse extends ResponseBase implements IResponse {
	calendar_id: string;
	description: string;
	job_ids: Id[];
}
