using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.Common;
using Nest.Document;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Document {

	public class ReindexDestination  {
		
		[DataMember(Name="index")]
		public IndexName Index { get; set; }


		[DataMember(Name="op_type")]
		public OpType OpType { get; set; }


		[DataMember(Name="pipeline")]
		public string Pipeline { get; set; }


		[DataMember(Name="routing")]
		public ReindexRouting Routing { get; set; }


		[DataMember(Name="version_type")]
		public VersionType VersionType { get; set; }

	}
}
