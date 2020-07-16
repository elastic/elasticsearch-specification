using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.Search;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class NestedIdentity  {
		
		[DataMember(Name="field")]
		public Field Field { get; set; }


		[DataMember(Name="_nested")]
		public NestedIdentity Nested { get; set; }


		[DataMember(Name="offset")]
		public int Offset { get; set; }

	}
}
