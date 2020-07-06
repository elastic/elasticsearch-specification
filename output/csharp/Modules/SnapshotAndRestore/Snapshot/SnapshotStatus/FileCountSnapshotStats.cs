using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Modules {

	public class FileCountSnapshotStats  {
		
		[DataMember(Name="file_count")]
		public int FileCount { get; set; }


		[DataMember(Name="size_in_bytes")]
		public long SizeInBytes { get; set; }

	}
}
