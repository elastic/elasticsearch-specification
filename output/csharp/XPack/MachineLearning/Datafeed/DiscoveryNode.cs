using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class DiscoveryNode  {
		
		[DataMember(Name="attributes")]
		public IDictionary<string, string> Attributes { get; set; }


		[DataMember(Name="ephemeral_id")]
		public string EphemeralId { get; set; }


		[DataMember(Name="id")]
		public string Id { get; set; }


		[DataMember(Name="name")]
		public string Name { get; set; }


		[DataMember(Name="transport_address")]
		public string TransportAddress { get; set; }

	}
}
