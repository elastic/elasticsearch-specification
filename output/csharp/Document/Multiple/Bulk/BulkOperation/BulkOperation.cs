using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.Common;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Document {

	public class BulkOperation  {
		
		[DataMember(Name="_id")]
		public Id Id { get; set; }


		[DataMember(Name="_index")]
		public IndexName Index { get; set; }


		[DataMember(Name="operation")]
		public string Operation { get; set; }


		[DataMember(Name="retry_on_conflict")]
		public int RetryOnConflict { get; set; }


		[DataMember(Name="routing")]
		public Routing Routing { get; set; }


		[DataMember(Name="version")]
		public long Version { get; set; }


		[DataMember(Name="version_type")]
		public VersionType VersionType { get; set; }

	}
}
