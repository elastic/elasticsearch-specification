class SlackAttachment {
	fallback: string;
	color: string;
	pretext: string;
	author_name: string;
	author_link: string;
	author_icon: string;
	title: string;
	title_link: string;
	text: string;
	fields: SlackAttachmentField[];
	image_url: string;
	thumb_url: string;
	footer: string;
	footer_icon: string;
	@prop_serializer("EpochSecondsDateTimeJsonConverter")
	ts: Date;
}
