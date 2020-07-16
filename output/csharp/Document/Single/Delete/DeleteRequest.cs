using Nest.Internal;
using Nest.Common;
using Nest.CommonAbstractions;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Document {

	public class DeleteRequest : RequestBase {
		
		[DataMember(Name="if_primary_term")]
		public long IfPrimaryTerm { get; set; }


		[DataMember(Name="if_sequence_number")]
		public long IfSequenceNumber { get; set; }


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

	}
}
