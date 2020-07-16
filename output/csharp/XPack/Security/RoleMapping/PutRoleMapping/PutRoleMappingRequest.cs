using Nest.Common;
using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class PutRoleMappingRequest : RequestBase {
		
		[DataMember(Name="refresh")]
		public Refresh Refresh { get; set; }


		[DataMember(Name="enabled")]
		public bool Enabled { get; set; }


		[DataMember(Name="metadata")]
		public IDictionary<string, object> Metadata { get; set; }


		[DataMember(Name="roles")]
		public List<string> Roles { get; set; }


		[DataMember(Name="rules")]
		public RoleMappingRuleBase Rules { get; set; }


		[DataMember(Name="run_as")]
		public List<string> RunAs { get; set; }

	}
}
