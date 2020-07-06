using Nest.XPack;
using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class IndicesPrivileges  {
		
		[DataMember(Name="field_security")]
		public FieldSecurity FieldSecurity { get; set; }


		[DataMember(Name="names")]
		public IndicesNames Names { get; set; }


		[DataMember(Name="privileges")]
		public List<string> Privileges { get; set; }


		[DataMember(Name="query")]
		public QueryContainer Query { get; set; }

	}
}
