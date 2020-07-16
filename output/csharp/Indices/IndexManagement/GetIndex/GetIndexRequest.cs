using Nest.Common;
using Nest.CommonOptions;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class GetIndexRequest : RequestBase {
		
		[DataMember(Name="allow_no_indices")]
		public bool AllowNoIndices { get; set; }


		[DataMember(Name="expand_wildcards")]
		public ExpandWildcards ExpandWildcards { get; set; }


		[DataMember(Name="flat_settings")]
		public bool FlatSettings { get; set; }


		[DataMember(Name="ignore_unavailable")]
		public bool IgnoreUnavailable { get; set; }


		[DataMember(Name="include_defaults")]
		public bool IncludeDefaults { get; set; }


		[DataMember(Name="include_type_name")]
		public bool IncludeTypeName { get; set; }


		[DataMember(Name="local")]
		public bool Local { get; set; }


		[DataMember(Name="master_timeout")]
		public Time MasterTimeout { get; set; }

	}
}
