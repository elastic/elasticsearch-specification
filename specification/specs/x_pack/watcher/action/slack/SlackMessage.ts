class SlackMessage {
  attachments: SlackAttachment[];
  dynamic_attachments: SlackDynamicAttachment;
  from: string;
  icon: string;
  text: string;
  to: string[];
}
