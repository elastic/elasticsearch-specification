
using System.Runtime.Serialization;

namespace Nest.QueryDsl {

	public enum CharacterType {
  
		[DataMember(Name = "Whitespace")] Whitespace,
		[DataMember(Name = "Alpha")] Alpha,
		[DataMember(Name = "Comment")] Comment
	}
}
