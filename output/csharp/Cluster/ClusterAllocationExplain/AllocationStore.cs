using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class AllocationStore  {
		
		[DataMember(Name="allocation_id")]
		public string AllocationId { get; set; }


		[DataMember(Name="found")]
		public bool Found { get; set; }


		[DataMember(Name="in_sync")]
		public bool InSync { get; set; }


		[DataMember(Name="matching_size_in_bytes")]
		public long MatchingSizeInBytes { get; set; }


		[DataMember(Name="matching_sync_id")]
		public bool MatchingSyncId { get; set; }


		[DataMember(Name="store_exception")]
		public string StoreException { get; set; }

	}
}
