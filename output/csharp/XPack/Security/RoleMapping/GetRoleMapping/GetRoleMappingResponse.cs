using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GetRoleMappingResponse : DictionaryResponseBase<string, XPackRoleMapping> {
		
		[DataMember(Name="role_mappings")]
		public IDictionary<string, XPackRoleMapping> RoleMappings { get; set; }

	}
}
