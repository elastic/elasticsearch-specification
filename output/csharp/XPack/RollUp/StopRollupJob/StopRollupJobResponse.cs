using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class StopRollupJobResponse : IResponse {
		
		[DataMember(Name="stopped")]
		public bool Stopped { get; set; }

	}
}
