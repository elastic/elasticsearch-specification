class HipChatMessage {
	body: string;
	format: HipChatMessageFormat;
	color: HipChatMessageColor;
	notify: boolean;
	from: string;
	room: string | string[];
	user: string | string[];
}
