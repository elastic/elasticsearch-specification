using Nest.Search;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class CompletionSuggester  {
		
		[DataMember(Name="contexts")]
		public IDictionary<string, List<SuggestContextQuery>> Contexts { get; set; }


		[DataMember(Name="fuzzy")]
		public SuggestFuzziness Fuzzy { get; set; }


		[DataMember(Name="prefix")]
		public string Prefix { get; set; }


		[DataMember(Name="regex")]
		public string Regex { get; set; }


		[DataMember(Name="skip_duplicates")]
		public bool SkipDuplicates { get; set; }

	}
}
