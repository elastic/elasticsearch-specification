using Nest.CommonOptions;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class OpenJobRequest : RequestBase {
		
		[DataMember(Name="timeout")]
		public Time Timeout { get; set; }

	}
}
