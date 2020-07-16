using Nest.Internal;
using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ModelSnapshot  {
		
		[DataMember(Name="description")]
		public string Description { get; set; }


		[DataMember(Name="job_id")]
		public string JobId { get; set; }


		[DataMember(Name="latest_record_time_stamp")]
		public DateTimeOffset LatestRecordTimeStamp { get; set; }


		[DataMember(Name="latest_result_time_stamp")]
		public DateTimeOffset LatestResultTimeStamp { get; set; }


		[DataMember(Name="model_size_stats")]
		public ModelSizeStats ModelSizeStats { get; set; }


		[DataMember(Name="retain")]
		public bool Retain { get; set; }


		[DataMember(Name="snapshot_doc_count")]
		public long SnapshotDocCount { get; set; }


		[DataMember(Name="snapshot_id")]
		public string SnapshotId { get; set; }


		[DataMember(Name="timestamp")]
		public DateTimeOffset Timestamp { get; set; }

	}
}
