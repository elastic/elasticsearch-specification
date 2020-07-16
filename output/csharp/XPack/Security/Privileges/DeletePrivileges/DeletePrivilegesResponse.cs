using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class DeletePrivilegesResponse : DictionaryResponseBase<string, IDictionary<string, FoundUserPrivilege>> {
		
		[DataMember(Name="applications")]
		public IDictionary<string, IDictionary<string, FoundUserPrivilege>> Applications { get; set; }

	}
}
