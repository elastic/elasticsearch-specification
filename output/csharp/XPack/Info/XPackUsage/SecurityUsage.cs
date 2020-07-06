using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class SecurityUsage : XPackUsage {
		
		[DataMember(Name="anonymous")]
		public SecurityFeatureToggle Anonymous { get; set; }


		[DataMember(Name="audit")]
		public AuditUsage Audit { get; set; }


		[DataMember(Name="ipfilter")]
		public IpFilterUsage Ipfilter { get; set; }


		[DataMember(Name="realms")]
		public IDictionary<string, RealmUsage> Realms { get; set; }


		[DataMember(Name="role_mapping")]
		public IDictionary<string, RoleMappingUsage> RoleMapping { get; set; }


		[DataMember(Name="roles")]
		public IDictionary<string, RoleUsage> Roles { get; set; }


		[DataMember(Name="ssl")]
		public SslUsage Ssl { get; set; }


		[DataMember(Name="system_key")]
		public SecurityFeatureToggle SystemKey { get; set; }

	}
}
