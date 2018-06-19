class SlackMessage {
	from: string;
	to: string[];
	icon: string;
	text: string;
	attachments: SlackAttachment[];
	dynamic_attachments: SlackDynamicAttachment;
}
