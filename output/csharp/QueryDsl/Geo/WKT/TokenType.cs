
using System.Runtime.Serialization;

namespace Nest.QueryDsl {

	public enum TokenType {
  
		[DataMember(Name = "None")] None,
		[DataMember(Name = "Word")] Word,
		[DataMember(Name = "LParen")] LParen,
		[DataMember(Name = "RParen")] RParen,
		[DataMember(Name = "Comma")] Comma
	}
}
