using Nest.XPack;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class EmailResult  {
		
		[DataMember(Name="bcc")]
		public List<string> Bcc { get; set; }


		[DataMember(Name="body")]
		public EmailBody Body { get; set; }


		[DataMember(Name="cc")]
		public List<string> Cc { get; set; }


		[DataMember(Name="from")]
		public string From { get; set; }


		[DataMember(Name="id")]
		public string Id { get; set; }


		[DataMember(Name="priority")]
		public EmailPriority Priority { get; set; }


		[DataMember(Name="reply_to")]
		public List<string> ReplyTo { get; set; }


		[DataMember(Name="sent_date")]
		public DateTimeOffset SentDate { get; set; }


		[DataMember(Name="subject")]
		public string Subject { get; set; }


		[DataMember(Name="to")]
		public List<string> To { get; set; }

	}
}
