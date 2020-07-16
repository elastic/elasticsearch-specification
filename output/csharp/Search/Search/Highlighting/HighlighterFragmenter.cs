
using System.Runtime.Serialization;

namespace Nest.Search {

	public enum HighlighterFragmenter {
  
		[DataMember(Name = "simple")] Simple,
		[DataMember(Name = "span")] Span
	}
}
