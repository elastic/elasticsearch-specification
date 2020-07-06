using Nest.Common;
using Nest.CommonOptions;
using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class CreateApiKeyRequest : RequestBase {
		
		[DataMember(Name="refresh")]
		public Refresh Refresh { get; set; }


		[DataMember(Name="expiration")]
		public Time Expiration { get; set; }


		[DataMember(Name="name")]
		public string Name { get; set; }


		[DataMember(Name="role_descriptors")]
		public IDictionary<string, ApiKeyRole> RoleDescriptors { get; set; }

	}
}
