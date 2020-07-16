using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class JvmClassesStats  {
		
		[DataMember(Name="current_loaded_count")]
		public long CurrentLoadedCount { get; set; }


		[DataMember(Name="total_loaded_count")]
		public long TotalLoadedCount { get; set; }


		[DataMember(Name="total_unloaded_count")]
		public long TotalUnloadedCount { get; set; }

	}
}
