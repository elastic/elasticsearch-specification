using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class RecoveryStatusRequest : RequestBase {
		
		[DataMember(Name="active_only")]
		public bool ActiveOnly { get; set; }


		[DataMember(Name="detailed")]
		public bool Detailed { get; set; }

	}
}
