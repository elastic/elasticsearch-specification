using Nest.Indices;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class ShardStore  {
		
		[DataMember(Name="allocation")]
		public ShardStoreAllocation Allocation { get; set; }


		[DataMember(Name="allocation_id")]
		public string AllocationId { get; set; }


		[DataMember(Name="attributes")]
		public IDictionary<string, object> Attributes { get; set; }


		[DataMember(Name="id")]
		public string Id { get; set; }


		[DataMember(Name="legacy_version")]
		public long LegacyVersion { get; set; }


		[DataMember(Name="name")]
		public string Name { get; set; }


		[DataMember(Name="store_exception")]
		public ShardStoreException StoreException { get; set; }


		[DataMember(Name="transport_address")]
		public string TransportAddress { get; set; }

	}
}
