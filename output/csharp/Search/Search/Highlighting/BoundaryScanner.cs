
using System.Runtime.Serialization;

namespace Nest.Search {

	public enum BoundaryScanner {
  
		[DataMember(Name = "chars")] Chars,
		[DataMember(Name = "sentence")] Sentence,
		[DataMember(Name = "word")] Word
	}
}
