class EmailResult {
	id: string;
	sent_date: Date;
	from: string;
	to: string[];
	cc: string[];
	bcc: string[];
	reply_to: string[];
	subject: string;
	body: EmailBody;
	priority: EmailPriority;
}
