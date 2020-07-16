using Nest.Common;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class GetAliasRequest : RequestBase {
		
		[DataMember(Name="allow_no_indices")]
		public bool AllowNoIndices { get; set; }


		[DataMember(Name="expand_wildcards")]
		public ExpandWildcards ExpandWildcards { get; set; }


		[DataMember(Name="ignore_unavailable")]
		public bool IgnoreUnavailable { get; set; }


		[DataMember(Name="local")]
		public bool Local { get; set; }

	}
}
