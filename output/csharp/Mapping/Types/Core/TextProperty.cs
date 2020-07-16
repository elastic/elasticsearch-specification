using Nest.Internal;
using Nest.Modules;
using Nest.Mapping;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Mapping {

	public class TextProperty : CorePropertyBase {
		
		[DataMember(Name="analyzer")]
		public string Analyzer { get; set; }


		[DataMember(Name="boost")]
		public double Boost { get; set; }


		[DataMember(Name="eager_global_ordinals")]
		public bool EagerGlobalOrdinals { get; set; }


		[DataMember(Name="fielddata")]
		public bool Fielddata { get; set; }


		[DataMember(Name="fielddata_frequency_filter")]
		public FielddataFrequencyFilter FielddataFrequencyFilter { get; set; }


		[DataMember(Name="index")]
		public bool Index { get; set; }


		[DataMember(Name="index_options")]
		public IndexOptions IndexOptions { get; set; }


		[DataMember(Name="index_phrases")]
		public bool IndexPhrases { get; set; }


		[DataMember(Name="index_prefixes")]
		public TextIndexPrefixes IndexPrefixes { get; set; }


		[DataMember(Name="norms")]
		public bool Norms { get; set; }


		[DataMember(Name="position_increment_gap")]
		public int PositionIncrementGap { get; set; }


		[DataMember(Name="search_analyzer")]
		public string SearchAnalyzer { get; set; }


		[DataMember(Name="search_quote_analyzer")]
		public string SearchQuoteAnalyzer { get; set; }


		[DataMember(Name="term_vector")]
		public TermVectorOption TermVector { get; set; }

	}
}
