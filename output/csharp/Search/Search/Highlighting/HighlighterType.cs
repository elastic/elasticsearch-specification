
using System.Runtime.Serialization;

namespace Nest.Search {

	public enum HighlighterType {
  
		[DataMember(Name = "plain")] Plain,
		[DataMember(Name = "fvh")] Fvh,
		[DataMember(Name = "unified")] Unified
	}
}
