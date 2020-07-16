using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.CommonOptions {

	public class FielddataStats  {
		
		[DataMember(Name="evictions")]
		public long Evictions { get; set; }


		[DataMember(Name="memory_size_in_bytes")]
		public long MemorySizeInBytes { get; set; }

	}
}
