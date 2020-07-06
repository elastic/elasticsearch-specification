using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class FollowIndexReadException  {
		
		[DataMember(Name="exception")]
		public ErrorCause Exception { get; set; }


		[DataMember(Name="from_seq_no")]
		public long FromSeqNo { get; set; }


		[DataMember(Name="retries")]
		public int Retries { get; set; }

	}
}
