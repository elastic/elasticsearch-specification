
using System.Runtime.Serialization;

namespace Nest.QueryDsl {

	public enum TextQueryType {
  
		[DataMember(Name = "best_fields")] BestFields,
		[DataMember(Name = "most_fields")] MostFields,
		[DataMember(Name = "cross_fields")] CrossFields,
		[DataMember(Name = "phrase")] Phrase,
		[DataMember(Name = "phrase_prefix")] PhrasePrefix,
		[DataMember(Name = "bool_prefix")] BoolPrefix
	}
}
