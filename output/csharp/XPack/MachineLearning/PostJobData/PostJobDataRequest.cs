using Nest.Internal;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class PostJobDataRequest : RequestBase {
		
		[DataMember(Name="reset_end")]
		public DateTimeOffset ResetEnd { get; set; }


		[DataMember(Name="reset_start")]
		public DateTimeOffset ResetStart { get; set; }


		[DataMember(Name="data")]
		public List<object> Data { get; set; }

	}
}
