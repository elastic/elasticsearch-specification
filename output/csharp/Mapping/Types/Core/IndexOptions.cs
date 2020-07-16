
using System.Runtime.Serialization;

namespace Nest.Mapping {

	public enum IndexOptions {
  
		[DataMember(Name = "docs")] Docs,
		[DataMember(Name = "freqs")] Freqs,
		[DataMember(Name = "positions")] Positions,
		[DataMember(Name = "offsets")] Offsets
	}
}
