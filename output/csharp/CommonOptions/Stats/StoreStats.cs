using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.CommonOptions {

	public class StoreStats  {
		
		[DataMember(Name="size")]
		public string Size { get; set; }


		[DataMember(Name="size_in_bytes")]
		public double SizeInBytes { get; set; }

	}
}
