using Nest.CommonOptions;
using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Modules {

	public class SnapshotRequest : RequestBase {
		
		[DataMember(Name="master_timeout")]
		public Time MasterTimeout { get; set; }


		[DataMember(Name="wait_for_completion")]
		public bool WaitForCompletion { get; set; }


		[DataMember(Name="ignore_unavailable")]
		public bool IgnoreUnavailable { get; set; }


		[DataMember(Name="include_global_state")]
		public bool IncludeGlobalState { get; set; }


		[DataMember(Name="indices")]
		public IndicesNames Indices { get; set; }


		[DataMember(Name="metadata")]
		public IDictionary<string, object> Metadata { get; set; }


		[DataMember(Name="partial")]
		public bool Partial { get; set; }

	}
}
