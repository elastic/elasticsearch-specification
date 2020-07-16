using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class DataCounts  {
		
		[DataMember(Name="bucket_count")]
		public long BucketCount { get; set; }


		[DataMember(Name="earliest_record_timestamp")]
		public DateTimeOffset EarliestRecordTimestamp { get; set; }


		[DataMember(Name="empty_bucket_count")]
		public long EmptyBucketCount { get; set; }


		[DataMember(Name="input_bytes")]
		public long InputBytes { get; set; }


		[DataMember(Name="input_field_count")]
		public long InputFieldCount { get; set; }


		[DataMember(Name="input_record_count")]
		public long InputRecordCount { get; set; }


		[DataMember(Name="invalid_date_count")]
		public long InvalidDateCount { get; set; }


		[DataMember(Name="job_id")]
		public string JobId { get; set; }


		[DataMember(Name="last_data_time")]
		public DateTimeOffset LastDataTime { get; set; }


		[DataMember(Name="latest_empty_bucket_timestamp")]
		public DateTimeOffset LatestEmptyBucketTimestamp { get; set; }


		[DataMember(Name="latest_record_timestamp")]
		public DateTimeOffset LatestRecordTimestamp { get; set; }


		[DataMember(Name="latest_sparse_bucket_timestamp")]
		public DateTimeOffset LatestSparseBucketTimestamp { get; set; }


		[DataMember(Name="missing_field_count")]
		public long MissingFieldCount { get; set; }


		[DataMember(Name="out_of_order_timestamp_count")]
		public long OutOfOrderTimestampCount { get; set; }


		[DataMember(Name="processed_field_count")]
		public long ProcessedFieldCount { get; set; }


		[DataMember(Name="processed_record_count")]
		public long ProcessedRecordCount { get; set; }


		[DataMember(Name="sparse_bucket_count")]
		public long SparseBucketCount { get; set; }

	}
}
