using Nest.Internal;
using Nest.Document;
using Nest.CommonOptions;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Document {

	public class WriteResponseBase : IResponse {
		
		[DataMember(Name="_id")]
		public string Id { get; set; }


		[DataMember(Name="_index")]
		public string Index { get; set; }


		[DataMember(Name="_primary_term")]
		public long PrimaryTerm { get; set; }


		[DataMember(Name="result")]
		public Result Result { get; set; }


		[DataMember(Name="_seq_no")]
		public long SeqNo { get; set; }


		[DataMember(Name="_shards")]
		public ShardStatistics Shards { get; set; }


		[DataMember(Name="_type")]
		public string Type { get; set; }


		[DataMember(Name="_version")]
		public long Version { get; set; }

	}
}
