using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GetRollupJobResponse : IResponse {
		
		[DataMember(Name="jobs")]
		public List<RollupJobInformation> Jobs { get; set; }

	}
}
