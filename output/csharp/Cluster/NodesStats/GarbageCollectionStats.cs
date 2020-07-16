using Nest.Cluster;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class GarbageCollectionStats  {
		
		[DataMember(Name="collectors")]
		public IDictionary<string, GarbageCollectionGenerationStats> Collectors { get; set; }

	}
}
