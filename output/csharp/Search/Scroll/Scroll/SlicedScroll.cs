using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class SlicedScroll  {
		
		[DataMember(Name="field")]
		public Field Field { get; set; }


		[DataMember(Name="id")]
		public int Id { get; set; }


		[DataMember(Name="max")]
		public int Max { get; set; }

	}
}
