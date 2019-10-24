class PagerDutyEvent {
	account: string;
	attach_payload: boolean;
	client: string;
	client_url: string;
	context: PagerDutyContext[];
	description: string;
	event_type: PagerDutyEventType;
	incident_key: string;
}
