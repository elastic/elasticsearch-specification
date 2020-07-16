using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Modules {

	public class CleanupRepositoryResults  {
		
		[DataMember(Name="deleted_blobs")]
		public long DeletedBlobs { get; set; }


		[DataMember(Name="deleted_bytes")]
		public long DeletedBytes { get; set; }

	}
}
