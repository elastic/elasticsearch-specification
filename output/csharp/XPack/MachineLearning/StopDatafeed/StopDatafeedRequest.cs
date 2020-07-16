using Nest.CommonOptions;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class StopDatafeedRequest : RequestBase {
		
		[DataMember(Name="allow_no_datafeeds")]
		public bool AllowNoDatafeeds { get; set; }


		[DataMember(Name="force")]
		public bool Force { get; set; }


		[DataMember(Name="timeout")]
		public Time Timeout { get; set; }

	}
}
