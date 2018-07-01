class SlackActionMessageResult {
	status: Status;
	reason: string;
	request: HttpInputRequestResult;
	response: HttpInputResponseResult;
	to: string;
	message: SlackMessage;
}
