using Nest.Search;
using Nest.QueryDsl;
using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class SuggestOption<TDocument>  {
		
		[DataMember(Name="collate_match")]
		public bool CollateMatch { get; set; }


		[DataMember(Name="contexts")]
		public IDictionary<string, List<Context>> Contexts { get; set; }


		[DataMember(Name="fields")]
		public IDictionary<string, LazyDocument> Fields { get; set; }


		[DataMember(Name="freq")]
		public long Freq { get; set; }


		[DataMember(Name="highlighted")]
		public string Highlighted { get; set; }


		[DataMember(Name="_id")]
		public string Id { get; set; }


		[DataMember(Name="_index")]
		public IndexName Index { get; set; }


		[DataMember(Name="_score")]
		public double SuggestScore { get; set; }


		[DataMember(Name="score")]
		public double DocumentScore { get; set; }


		[DataMember(Name="_source")]
		public TDocument Source { get; set; }


		[DataMember(Name="text")]
		public string Text { get; set; }

	}
}
