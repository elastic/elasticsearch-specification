
using System.Runtime.Serialization;

namespace Nest.Search {

	public enum HighlighterEncoder {
  
		[DataMember(Name = "default")] Default,
		[DataMember(Name = "html")] Html
	}
}
