using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class RecoveryOrigin  {
		
		[DataMember(Name="hostname")]
		public string Hostname { get; set; }


		[DataMember(Name="id")]
		public string Id { get; set; }


		[DataMember(Name="ip")]
		public string Ip { get; set; }


		[DataMember(Name="name")]
		public string Name { get; set; }

	}
}
