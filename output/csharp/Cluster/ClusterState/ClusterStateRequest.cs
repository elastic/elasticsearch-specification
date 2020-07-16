using Nest.Common;
using Nest.CommonOptions;
using Nest.Internal;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ClusterStateRequest : RequestBase {
		
		[DataMember(Name="allow_no_indices")]
		public bool AllowNoIndices { get; set; }


		[DataMember(Name="expand_wildcards")]
		public ExpandWildcards ExpandWildcards { get; set; }


		[DataMember(Name="flat_settings")]
		public bool FlatSettings { get; set; }


		[DataMember(Name="ignore_unavailable")]
		public bool IgnoreUnavailable { get; set; }


		[DataMember(Name="local")]
		public bool Local { get; set; }


		[DataMember(Name="master_timeout")]
		public Time MasterTimeout { get; set; }


		[DataMember(Name="wait_for_metadata_version")]
		public long WaitForMetadataVersion { get; set; }


		[DataMember(Name="wait_for_timeout")]
		public Time WaitForTimeout { get; set; }

	}
}
