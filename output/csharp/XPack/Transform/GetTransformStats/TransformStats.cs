using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class TransformStats  {
		
		[DataMember(Name="checkpointing")]
		public TransformCheckpointingInfo Checkpointing { get; set; }


		[DataMember(Name="id")]
		public string Id { get; set; }


		[DataMember(Name="node")]
		public NodeAttributes Node { get; set; }


		[DataMember(Name="reason")]
		public string Reason { get; set; }


		[DataMember(Name="state")]
		public string State { get; set; }


		[DataMember(Name="stats")]
		public TransformIndexerStats Stats { get; set; }

	}
}
