using Nest.Common;
using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class FieldCapabilitiesRequest : RequestBase {
		
		[DataMember(Name="allow_no_indices")]
		public bool AllowNoIndices { get; set; }


		[DataMember(Name="expand_wildcards")]
		public ExpandWildcards ExpandWildcards { get; set; }


		[DataMember(Name="fields")]
		public List<Field> Fields { get; set; }


		[DataMember(Name="ignore_unavailable")]
		public bool IgnoreUnavailable { get; set; }


		[DataMember(Name="include_unmapped")]
		public bool IncludeUnmapped { get; set; }

	}
}
