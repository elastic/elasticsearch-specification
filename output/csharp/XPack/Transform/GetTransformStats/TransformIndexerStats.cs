using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class TransformIndexerStats  {
		
		[DataMember(Name="documents_indexed")]
		public long DocumentsIndexed { get; set; }


		[DataMember(Name="documents_processed")]
		public long DocumentsProcessed { get; set; }


		[DataMember(Name="exponential_avg_checkpoint_duration_ms")]
		public double ExponentialAvgCheckpointDurationMs { get; set; }


		[DataMember(Name="exponential_avg_documents_indexed")]
		public double ExponentialAvgDocumentsIndexed { get; set; }


		[DataMember(Name="exponential_avg_documents_processed")]
		public double ExponentialAvgDocumentsProcessed { get; set; }


		[DataMember(Name="index_failures")]
		public long IndexFailures { get; set; }


		[DataMember(Name="index_time_in_ms")]
		public long IndexTimeInMs { get; set; }


		[DataMember(Name="index_total")]
		public long IndexTotal { get; set; }


		[DataMember(Name="pages_processed")]
		public long PagesProcessed { get; set; }


		[DataMember(Name="processing_time_in_ms")]
		public long ProcessingTimeInMs { get; set; }


		[DataMember(Name="processing_total")]
		public long ProcessingTotal { get; set; }


		[DataMember(Name="search_failures")]
		public long SearchFailures { get; set; }


		[DataMember(Name="search_time_in_ms")]
		public long SearchTimeInMs { get; set; }


		[DataMember(Name="search_total")]
		public long SearchTotal { get; set; }


		[DataMember(Name="trigger_count")]
		public long TriggerCount { get; set; }

	}
}
