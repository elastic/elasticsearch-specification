using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class SnapshotLifecycleConfig  {
		
		[DataMember(Name="ignore_unavailable")]
		public bool IgnoreUnavailable { get; set; }


		[DataMember(Name="include_global_state")]
		public bool IncludeGlobalState { get; set; }


		[DataMember(Name="indices")]
		public IndicesNames Indices { get; set; }

	}
}
