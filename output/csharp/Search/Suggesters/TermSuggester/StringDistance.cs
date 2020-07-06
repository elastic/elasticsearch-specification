
using System.Runtime.Serialization;

namespace Nest.Search {

	public enum StringDistance {
  
		[DataMember(Name = "internal")] Internal,
		[DataMember(Name = "damerau_levenshtein")] DamerauLevenshtein,
		[DataMember(Name = "levenshtein")] Levenshtein,
		[DataMember(Name = "jaro_winkler")] JaroWinkler,
		[DataMember(Name = "ngram")] Ngram
	}
}
