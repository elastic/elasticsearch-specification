using Nest.Internal;
using Nest.CommonOptions;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class StartDatafeedRequest : RequestBase {
		
		[DataMember(Name="end")]
		public DateTimeOffset End { get; set; }


		[DataMember(Name="start")]
		public DateTimeOffset Start { get; set; }


		[DataMember(Name="timeout")]
		public Time Timeout { get; set; }

	}
}
