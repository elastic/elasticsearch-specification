using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class TermsRollupGrouping  {
		
		[DataMember(Name="fields")]
		public List<Field> Fields { get; set; }

	}
}
