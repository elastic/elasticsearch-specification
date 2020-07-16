using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class XPackRoleMapping  {
		
		[DataMember(Name="enabled")]
		public bool Enabled { get; set; }


		[DataMember(Name="metadata")]
		public IDictionary<string, object> Metadata { get; set; }


		[DataMember(Name="roles")]
		public List<string> Roles { get; set; }


		[DataMember(Name="rules")]
		public RoleMappingRuleBase Rules { get; set; }

	}
}
