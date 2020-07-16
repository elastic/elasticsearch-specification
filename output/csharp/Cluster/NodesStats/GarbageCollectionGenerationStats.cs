using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class GarbageCollectionGenerationStats  {
		
		[DataMember(Name="collection_count")]
		public long CollectionCount { get; set; }


		[DataMember(Name="collection_time")]
		public string CollectionTime { get; set; }


		[DataMember(Name="collection_time_in_millis")]
		public long CollectionTimeInMillis { get; set; }

	}
}
