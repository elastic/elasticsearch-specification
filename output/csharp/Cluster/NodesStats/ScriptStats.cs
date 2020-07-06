using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ScriptStats  {
		
		[DataMember(Name="cache_evictions")]
		public long CacheEvictions { get; set; }


		[DataMember(Name="compilations")]
		public long Compilations { get; set; }

	}
}
