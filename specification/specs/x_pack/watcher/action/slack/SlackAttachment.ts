class SlackAttachment {
	author_icon: string;
	author_link: string;
	author_name: string;
	color: string;
	fallback: string;
	fields: SlackAttachmentField[];
	footer: string;
	footer_icon: string;
	image_url: string;
	pretext: string;
	text: string;
	thumb_url: string;
	title: string;
	title_link: string;
	@prop_serializer("NullableDateTimeOffsetEpochSecondsFormatter")
	ts: Date;
}
