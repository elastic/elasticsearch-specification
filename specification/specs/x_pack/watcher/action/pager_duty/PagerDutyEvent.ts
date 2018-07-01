class PagerDutyEvent {
	account: string;
	description: string;
	event_type: PagerDutyEventType;
	incident_key: string;
	client: string;
	client_url: string;
	attach_payload: boolean;
	context: PagerDutyContext[];
}
