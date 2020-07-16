using Nest.Internal;
using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GetFiltersResponse : IResponse {
		
		[DataMember(Name="count")]
		public long Count { get; set; }


		[DataMember(Name="filters")]
		public List<Filter> Filters { get; set; }

	}
}
