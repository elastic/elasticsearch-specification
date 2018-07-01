class HipChatActionMessageResult {
	status: Status;
	reason: string;
	request: HttpInputRequestResult;
	response: HttpInputResponseResult;
	room: string;
	user: string;
	message: HipChatMessage;
}
