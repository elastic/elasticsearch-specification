using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class PhraseSuggestCollateQuery  {
		
		[DataMember(Name="id")]
		public Id Id { get; set; }


		[DataMember(Name="source")]
		public string Source { get; set; }

	}
}
