using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class RollupJobInformation  {
		
		[DataMember(Name="config")]
		public RollupJobConfiguration Config { get; set; }


		[DataMember(Name="stats")]
		public RollupJobStats Stats { get; set; }


		[DataMember(Name="status")]
		public RollupJobStatus Status { get; set; }

	}
}
