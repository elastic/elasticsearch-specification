using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class ShardSequenceNumber  {
		
		[DataMember(Name="global_checkpoint")]
		public long GlobalCheckpoint { get; set; }


		[DataMember(Name="local_checkpoint")]
		public long LocalCheckpoint { get; set; }


		[DataMember(Name="max_seq_no")]
		public long MaxSeqNo { get; set; }

	}
}
