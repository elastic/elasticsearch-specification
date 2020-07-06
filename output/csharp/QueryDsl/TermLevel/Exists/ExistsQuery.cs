using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class ExistsQuery  {
		
		[DataMember(Name="field")]
		public Field Field { get; set; }

	}
}
