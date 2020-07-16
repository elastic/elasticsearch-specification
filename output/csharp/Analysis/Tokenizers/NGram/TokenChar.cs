
using System.Runtime.Serialization;

namespace Nest.Analysis {

	public enum TokenChar {
  
		[DataMember(Name = "letter")] Letter,
		[DataMember(Name = "digit")] Digit,
		[DataMember(Name = "whitespace")] Whitespace,
		[DataMember(Name = "punctuation")] Punctuation,
		[DataMember(Name = "symbol")] Symbol,
		[DataMember(Name = "custom")] Custom
	}
}
