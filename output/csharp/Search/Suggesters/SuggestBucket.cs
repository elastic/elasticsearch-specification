using Nest.Search;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class SuggestBucket  {
		
		[DataMember(Name="completion")]
		public CompletionSuggester Completion { get; set; }


		[DataMember(Name="phrase")]
		public PhraseSuggester Phrase { get; set; }


		[DataMember(Name="prefix")]
		public string Prefix { get; set; }


		[DataMember(Name="regex")]
		public string Regex { get; set; }


		[DataMember(Name="term")]
		public TermSuggester Term { get; set; }


		[DataMember(Name="text")]
		public string Text { get; set; }

	}
}
