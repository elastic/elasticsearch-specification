using Nest.Search;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class ExplanationDetail  {
		
		[DataMember(Name="description")]
		public string Description { get; set; }


		[DataMember(Name="details")]
		public List<ExplanationDetail> Details { get; set; }


		[DataMember(Name="value")]
		public float Value { get; set; }

	}
}
