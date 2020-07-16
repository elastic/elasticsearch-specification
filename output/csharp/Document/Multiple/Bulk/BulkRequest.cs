using Nest.Common;
using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.CommonOptions;
using Nest.Document;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Document {

	public class BulkRequest : RequestBase {
		
		[DataMember(Name="pipeline")]
		public string Pipeline { get; set; }


		[DataMember(Name="refresh")]
		public Refresh Refresh { get; set; }


		[DataMember(Name="routing")]
		public Routing Routing { get; set; }


		[DataMember(Name="source_enabled")]
		public bool SourceEnabled { get; set; }


		[DataMember(Name="source_excludes")]
		public List<Field> SourceExcludes { get; set; }


		[DataMember(Name="source_includes")]
		public List<Field> SourceIncludes { get; set; }


		[DataMember(Name="timeout")]
		public Time Timeout { get; set; }


		[DataMember(Name="type_query_string")]
		public string TypeQueryString { get; set; }


		[DataMember(Name="wait_for_active_shards")]
		public string WaitForActiveShards { get; set; }


		[DataMember(Name="operations")]
		public List<BulkOperation> Operations { get; set; }

	}
}
