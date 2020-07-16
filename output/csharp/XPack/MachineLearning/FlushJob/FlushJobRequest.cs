using Nest.Internal;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class FlushJobRequest : RequestBase {
		
		[DataMember(Name="skip_time")]
		public string SkipTime { get; set; }


		[DataMember(Name="advance_time")]
		public DateTimeOffset AdvanceTime { get; set; }


		[DataMember(Name="calc_interim")]
		public bool CalcInterim { get; set; }


		[DataMember(Name="end")]
		public DateTimeOffset End { get; set; }


		[DataMember(Name="start")]
		public DateTimeOffset Start { get; set; }

	}
}
