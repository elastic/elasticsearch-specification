using Nest.Internal;
using Nest.Search;
using Nest.QueryDsl;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class SuggestContextQuery  {
		
		[DataMember(Name="boost")]
		public double Boost { get; set; }


		[DataMember(Name="context")]
		public Context Context { get; set; }


		[DataMember(Name="neighbours")]
		public Union<List<Distance>, List<int>> Neighbours { get; set; }


		[DataMember(Name="precision")]
		public Union<Distance, int> Precision { get; set; }


		[DataMember(Name="prefix")]
		public bool Prefix { get; set; }

	}
}
