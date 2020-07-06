using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class EmailActionResult  {
		
		[DataMember(Name="account")]
		public string Account { get; set; }


		[DataMember(Name="message")]
		public EmailResult Message { get; set; }


		[DataMember(Name="reason")]
		public string Reason { get; set; }

	}
}
