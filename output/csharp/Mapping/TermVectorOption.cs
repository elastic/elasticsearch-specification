
using System.Runtime.Serialization;

namespace Nest.Mapping {

	public enum TermVectorOption {
  
		[DataMember(Name = "no")] No,
		[DataMember(Name = "yes")] Yes,
		[DataMember(Name = "with_offsets")] WithOffsets,
		[DataMember(Name = "with_positions")] WithPositions,
		[DataMember(Name = "with_positions_offsets")] WithPositionsOffsets,
		[DataMember(Name = "with_positions_offsets_payloads")] WithPositionsOffsetsPayloads
	}
}
