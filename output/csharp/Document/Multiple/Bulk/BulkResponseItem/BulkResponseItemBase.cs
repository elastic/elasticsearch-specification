using Nest.Internal;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Document {

	public class BulkResponseItemBase  {
		
		[DataMember(Name="error")]
		public MainError Error { get; set; }


		[DataMember(Name="_id")]
		public string Id { get; set; }


		[DataMember(Name="_index")]
		public string Index { get; set; }


		[DataMember(Name="operation")]
		public string Operation { get; set; }


		[DataMember(Name="_primary_term")]
		public long PrimaryTerm { get; set; }


		[DataMember(Name="result")]
		public string Result { get; set; }


		[DataMember(Name="_seq_no")]
		public long SeqNo { get; set; }


		[DataMember(Name="_shards")]
		public ShardStatistics Shards { get; set; }


		[DataMember(Name="status")]
		public int Status { get; set; }


		[DataMember(Name="_type")]
		public string Type { get; set; }


		[DataMember(Name="_version")]
		public long Version { get; set; }

	}
}
