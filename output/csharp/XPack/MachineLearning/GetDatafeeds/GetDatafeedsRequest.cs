using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GetDatafeedsRequest : RequestBase {
		
		[DataMember(Name="allow_no_datafeeds")]
		public bool AllowNoDatafeeds { get; set; }

	}
}
