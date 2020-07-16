using Nest.Cat;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cat {

	public class CatDataFrameAnalyticsRecord : ICatRecord {
		
		[DataMember(Name="assignment_explanation")]
		public string AssignmentExplanation { get; set; }


		[DataMember(Name="create_time")]
		public string CreateTime { get; set; }


		[DataMember(Name="description")]
		public string Description { get; set; }


		[DataMember(Name="dest_index")]
		public string DestIndex { get; set; }


		[DataMember(Name="failure_reason")]
		public string FailureReason { get; set; }


		[DataMember(Name="id")]
		public string Id { get; set; }


		[DataMember(Name="model_memory_limit")]
		public string ModelMemoryLimit { get; set; }


		[DataMember(Name="node.address")]
		public string NodeAddress { get; set; }


		[DataMember(Name="node.ephemeral_id")]
		public string NodeEphemeralId { get; set; }


		[DataMember(Name="node.id")]
		public string NodeId { get; set; }


		[DataMember(Name="node.name")]
		public string NodeName { get; set; }


		[DataMember(Name="progress")]
		public string Progress { get; set; }


		[DataMember(Name="source_index")]
		public string SourceIndex { get; set; }


		[DataMember(Name="state")]
		public string State { get; set; }


		[DataMember(Name="type")]
		public string Type { get; set; }


		[DataMember(Name="version")]
		public string Version { get; set; }

	}
}
