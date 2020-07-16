using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class InlineGet<TDocument>  {
		
		[DataMember(Name="fields")]
		public IDictionary<string, LazyDocument> Fields { get; set; }


		[DataMember(Name="found")]
		public bool Found { get; set; }


		[DataMember(Name="_source")]
		public TDocument Source { get; set; }

	}
}
