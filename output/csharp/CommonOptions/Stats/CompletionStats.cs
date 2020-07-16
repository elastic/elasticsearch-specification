using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.CommonOptions {

	public class CompletionStats  {
		
		[DataMember(Name="size_in_bytes")]
		public long SizeInBytes { get; set; }

	}
}
