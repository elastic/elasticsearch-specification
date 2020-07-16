using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class StartRollupJobResponse : IResponse {
		
		[DataMember(Name="started")]
		public bool Started { get; set; }

	}
}
