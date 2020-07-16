using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class Calendar  {
		
		[DataMember(Name="calendar_id")]
		public string CalendarId { get; set; }


		[DataMember(Name="description")]
		public string Description { get; set; }


		[DataMember(Name="job_ids")]
		public List<string> JobIds { get; set; }

	}
}
