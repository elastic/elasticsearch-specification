using Nest.Common;
using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class PutPrivilegesRequest : RequestBase {
		
		[DataMember(Name="refresh")]
		public Refresh Refresh { get; set; }


		[DataMember(Name="applications")]
		public IDictionary<string, IDictionary<string, PrivilegesActions>> Applications { get; set; }

	}
}
