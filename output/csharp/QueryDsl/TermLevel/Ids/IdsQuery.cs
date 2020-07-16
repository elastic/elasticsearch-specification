using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class IdsQuery  {
		
		[DataMember(Name="values")]
		public List<Id> Values { get; set; }

	}
}
