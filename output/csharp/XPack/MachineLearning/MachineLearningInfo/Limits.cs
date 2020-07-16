using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class Limits  {
		
		[DataMember(Name="max_model_memory_limit")]
		public string MaxModelMemoryLimit { get; set; }

	}
}
