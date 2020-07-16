using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GetRoleResponse : DictionaryResponseBase<string, XPackRole> {
		
		[DataMember(Name="roles")]
		public IDictionary<string, XPackRole> Roles { get; set; }

	}
}
