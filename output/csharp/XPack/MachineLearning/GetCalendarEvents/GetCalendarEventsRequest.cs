using Nest.Internal;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GetCalendarEventsRequest : RequestBase {
		
		[DataMember(Name="end")]
		public DateTimeOffset End { get; set; }


		[DataMember(Name="job_id")]
		public string JobId { get; set; }


		[DataMember(Name="start")]
		public string Start { get; set; }


		[DataMember(Name="from")]
		public int From { get; set; }


		[DataMember(Name="size")]
		public int Size { get; set; }

	}
}
