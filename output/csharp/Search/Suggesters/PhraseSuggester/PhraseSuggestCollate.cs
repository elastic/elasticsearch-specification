using Nest.Search;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class PhraseSuggestCollate  {
		
		[DataMember(Name="params")]
		public IDictionary<string, object> Params { get; set; }


		[DataMember(Name="prune")]
		public bool Prune { get; set; }


		[DataMember(Name="query")]
		public PhraseSuggestCollateQuery Query { get; set; }

	}
}
