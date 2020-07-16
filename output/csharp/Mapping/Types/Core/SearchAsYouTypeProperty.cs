using Nest.Mapping;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Mapping {

	public class SearchAsYouTypeProperty : CorePropertyBase {
		
		[DataMember(Name="analyzer")]
		public string Analyzer { get; set; }


		[DataMember(Name="index")]
		public bool Index { get; set; }


		[DataMember(Name="index_options")]
		public IndexOptions IndexOptions { get; set; }


		[DataMember(Name="max_shingle_size")]
		public int MaxShingleSize { get; set; }


		[DataMember(Name="norms")]
		public bool Norms { get; set; }


		[DataMember(Name="search_analyzer")]
		public string SearchAnalyzer { get; set; }


		[DataMember(Name="search_quote_analyzer")]
		public string SearchQuoteAnalyzer { get; set; }


		[DataMember(Name="term_vector")]
		public TermVectorOption TermVector { get; set; }

	}
}
