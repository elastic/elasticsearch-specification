using Nest.Internal;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GetTransformStatsRequest : RequestBase {
		
		[DataMember(Name="allow_no_match")]
		public bool AllowNoMatch { get; set; }


		[DataMember(Name="from")]
		public long From { get; set; }


		[DataMember(Name="size")]
		public long Size { get; set; }

	}
}
