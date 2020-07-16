using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ApiKeys  {
		
		[DataMember(Name="creation")]
		public DateTimeOffset Creation { get; set; }


		[DataMember(Name="expiration")]
		public DateTimeOffset Expiration { get; set; }


		[DataMember(Name="id")]
		public string Id { get; set; }


		[DataMember(Name="invalidated")]
		public bool Invalidated { get; set; }


		[DataMember(Name="name")]
		public string Name { get; set; }


		[DataMember(Name="realm")]
		public string Realm { get; set; }


		[DataMember(Name="username")]
		public string Username { get; set; }

	}
}
