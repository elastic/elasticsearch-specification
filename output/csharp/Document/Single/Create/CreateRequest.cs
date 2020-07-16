using Nest.Common;
using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Document {

	public class CreateRequest<TDocument> : RequestBase {
		
		[DataMember(Name="pipeline")]
		public string Pipeline { get; set; }


		[DataMember(Name="refresh")]
		public Refresh Refresh { get; set; }


		[DataMember(Name="routing")]
		public Routing Routing { get; set; }


		[DataMember(Name="timeout")]
		public Time Timeout { get; set; }


		[DataMember(Name="version")]
		public long Version { get; set; }


		[DataMember(Name="version_type")]
		public VersionType VersionType { get; set; }


		[DataMember(Name="wait_for_active_shards")]
		public string WaitForActiveShards { get; set; }


		[DataMember(Name="document")]
		public TDocument Document { get; set; }

	}
}
