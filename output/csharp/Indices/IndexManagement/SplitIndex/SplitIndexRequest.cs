using Nest.CommonOptions;
using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.Indices;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class SplitIndexRequest : RequestBase {
		
		[DataMember(Name="master_timeout")]
		public Time MasterTimeout { get; set; }


		[DataMember(Name="timeout")]
		public Time Timeout { get; set; }


		[DataMember(Name="wait_for_active_shards")]
		public string WaitForActiveShards { get; set; }


		[DataMember(Name="aliases")]
		public IDictionary<IndexName, Alias> Aliases { get; set; }


		[DataMember(Name="settings")]
		public IDictionary<string, object> Settings { get; set; }

	}
}
