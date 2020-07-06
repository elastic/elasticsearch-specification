using Nest.Internal;
using Nest.CommonOptions;
using Nest.CommonAbstractions;
using Nest.Cat;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cat {

	public class CatTransformsRecord : ICatRecord {
		
		[DataMember(Name="changes_last_detection_time")]
		public string ChangesLastDetectionTime { get; set; }


		[DataMember(Name="checkpoint_duration_time_exp_avg")]
		public long CheckpointDurationTimeExpAvg { get; set; }


		[DataMember(Name="create_time")]
		public DateTimeOffset CreateTime { get; set; }


		[DataMember(Name="description")]
		public string Description { get; set; }


		[DataMember(Name="dest_index")]
		public string DestIndex { get; set; }


		[DataMember(Name="documents_indexed")]
		public long DocumentsIndexed { get; set; }


		[DataMember(Name="documents_processed")]
		public long DocumentsProcessed { get; set; }


		[DataMember(Name="frequency")]
		public Time Frequency { get; set; }


		[DataMember(Name="id")]
		public string Id { get; set; }


		[DataMember(Name="indexed_documents_exp_avg")]
		public long IndexedDocumentsExpAvg { get; set; }


		[DataMember(Name="index_failure")]
		public long IndexFailure { get; set; }


		[DataMember(Name="index_time")]
		public long IndexTime { get; set; }


		[DataMember(Name="index_total")]
		public long IndexTotal { get; set; }


		[DataMember(Name="max_page_search_size")]
		public long MaxPageSearchSize { get; set; }


		[DataMember(Name="pages_processed")]
		public long PagesProcessed { get; set; }


		[DataMember(Name="pipeline")]
		public string Pipeline { get; set; }


		[DataMember(Name="processed_documents_exp_avg")]
		public long ProcessedDocumentsExpAvg { get; set; }


		[DataMember(Name="processing_time")]
		public long ProcessingTime { get; set; }


		[DataMember(Name="reason")]
		public string Reason { get; set; }


		[DataMember(Name="search_failure")]
		public long SearchFailure { get; set; }


		[DataMember(Name="search_time")]
		public long SearchTime { get; set; }


		[DataMember(Name="search_total")]
		public long SearchTotal { get; set; }


		[DataMember(Name="source_index")]
		public IndicesNames SourceIndex { get; set; }


		[DataMember(Name="state")]
		public TransformState State { get; set; }


		[DataMember(Name="transform_type")]
		public TransformType TransformType { get; set; }


		[DataMember(Name="trigger_count")]
		public long TriggerCount { get; set; }


		[DataMember(Name="version")]
		public string Version { get; set; }

	}
}
