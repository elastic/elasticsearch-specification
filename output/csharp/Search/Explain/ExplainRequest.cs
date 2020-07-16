using Nest.Common;
using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class ExplainRequest : RequestBase {
		
		[DataMember(Name="analyzer")]
		public string Analyzer { get; set; }


		[DataMember(Name="analyze_wildcard")]
		public bool AnalyzeWildcard { get; set; }


		[DataMember(Name="default_operator")]
		public DefaultOperator DefaultOperator { get; set; }


		[DataMember(Name="df")]
		public string Df { get; set; }


		[DataMember(Name="lenient")]
		public bool Lenient { get; set; }


		[DataMember(Name="preference")]
		public string Preference { get; set; }


		[DataMember(Name="query_on_query_string")]
		public string QueryOnQueryString { get; set; }


		[DataMember(Name="routing")]
		public Routing Routing { get; set; }


		[DataMember(Name="source_enabled")]
		public bool SourceEnabled { get; set; }


		[DataMember(Name="source_excludes")]
		public List<Field> SourceExcludes { get; set; }


		[DataMember(Name="source_includes")]
		public List<Field> SourceIncludes { get; set; }


		[DataMember(Name="stored_fields")]
		public List<Field> StoredFields { get; set; }


		[DataMember(Name="query")]
		public QueryContainer Query { get; set; }

	}
}
