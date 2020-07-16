using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GetPrivilegesResponse : DictionaryResponseBase<string, IDictionary<string, PrivilegesActions>> {
		
		[DataMember(Name="applications")]
		public IDictionary<string, IDictionary<string, PrivilegesActions>> Applications { get; set; }

	}
}
