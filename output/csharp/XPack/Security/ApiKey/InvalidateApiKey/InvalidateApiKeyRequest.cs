using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class InvalidateApiKeyRequest : RequestBase {
		
		[DataMember(Name="id")]
		public string Id { get; set; }


		[DataMember(Name="name")]
		public string Name { get; set; }


		[DataMember(Name="owner")]
		public bool Owner { get; set; }


		[DataMember(Name="realm_name")]
		public string RealmName { get; set; }


		[DataMember(Name="username")]
		public string Username { get; set; }

	}
}
