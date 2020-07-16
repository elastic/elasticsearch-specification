using Nest.Internal;
using Nest.Common;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Internal {

	public class ErrorCause  {
		
		[DataMember(Name="additional_properties")]
		public IDictionary<string, object> AdditionalProperties { get; set; }


		[DataMember(Name="bytes_limit")]
		public long BytesLimit { get; set; }


		[DataMember(Name="bytes_wanted")]
		public long BytesWanted { get; set; }


		[DataMember(Name="caused_by")]
		public ErrorCause CausedBy { get; set; }


		[DataMember(Name="column")]
		public int Column { get; set; }


		[DataMember(Name="failed_shards")]
		public List<ShardFailure> FailedShards { get; set; }


		[DataMember(Name="grouped")]
		public bool Grouped { get; set; }


		[DataMember(Name="index")]
		public string Index { get; set; }


		[DataMember(Name="index_u_u_i_d")]
		public string IndexUUID { get; set; }


		[DataMember(Name="language")]
		public string Language { get; set; }


		[DataMember(Name="licensed_expired_feature")]
		public string LicensedExpiredFeature { get; set; }


		[DataMember(Name="line")]
		public int Line { get; set; }


		[DataMember(Name="phase")]
		public string Phase { get; set; }


		[DataMember(Name="reason")]
		public string Reason { get; set; }


		[DataMember(Name="resource_id")]
		public List<string> ResourceId { get; set; }


		[DataMember(Name="resource_type")]
		public string ResourceType { get; set; }


		[DataMember(Name="script")]
		public string Script { get; set; }


		[DataMember(Name="script_stack")]
		public List<string> ScriptStack { get; set; }


		[DataMember(Name="shard")]
		public int Shard { get; set; }


		[DataMember(Name="stack_trace")]
		public string StackTrace { get; set; }


		[DataMember(Name="type")]
		public string Type { get; set; }

	}
}
