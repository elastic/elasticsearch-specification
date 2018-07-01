class ExecutionResultAction {
	id: string;
	type: ActionType;
	status: Status;
	email: EmailActionResult;
	index: IndexActionResult;
	webhook: WebhookActionResult;
	logging: LoggingActionResult;
	pagerduty: PagerDutyActionResult;
	hipchat: HipChatActionResult;
	slack: SlackActionResult;
	reason: string;
}
