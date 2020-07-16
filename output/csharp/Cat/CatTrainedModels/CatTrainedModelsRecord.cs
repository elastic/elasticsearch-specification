using Nest.Internal;
using Nest.Cat;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cat {

	public class CatTrainedModelsRecord : ICatRecord {
		
		[DataMember(Name="created_by")]
		public string CreatedBy { get; set; }


		[DataMember(Name="create_time")]
		public string CreateTime { get; set; }


		[DataMember(Name="data_frame_analytics_id")]
		public string DataFrameAnalyticsId { get; set; }


		[DataMember(Name="description")]
		public string Description { get; set; }


		[DataMember(Name="heap_size")]
		public string HeapSize { get; set; }


		[DataMember(Name="id")]
		public string Id { get; set; }


		[DataMember(Name="ingest.count")]
		public long IngestCount { get; set; }


		[DataMember(Name="ingest.current")]
		public long IngestCurrent { get; set; }


		[DataMember(Name="ingest.failed")]
		public long IngestFailed { get; set; }


		[DataMember(Name="ingest.pipelines")]
		public string IngestPipelines { get; set; }


		[DataMember(Name="ingest.time")]
		public long IngestTime { get; set; }


		[DataMember(Name="license")]
		public string License { get; set; }


		[DataMember(Name="operations")]
		public string Operations { get; set; }


		[DataMember(Name="version")]
		public string Version { get; set; }

	}
}
