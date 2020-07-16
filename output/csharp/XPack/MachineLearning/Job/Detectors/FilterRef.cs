using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class FilterRef  {
		
		[DataMember(Name="filter_id")]
		public Id FilterId { get; set; }


		[DataMember(Name="filter_type")]
		public RuleFilterType FilterType { get; set; }

	}
}
