
using System.Runtime.Serialization;

namespace Nest.QueryDsl {

	public enum SimpleQueryStringFlags {
  
		[DataMember(Name = "NONE")] None,
		[DataMember(Name = "AND")] And,
		[DataMember(Name = "OR")] Or,
		[DataMember(Name = "NOT")] Not,
		[DataMember(Name = "PREFIX")] Prefix,
		[DataMember(Name = "PHRASE")] Phrase,
		[DataMember(Name = "PRECEDENCE")] Precedence,
		[DataMember(Name = "ESCAPE")] Escape,
		[DataMember(Name = "WHITESPACE")] Whitespace,
		[DataMember(Name = "FUZZY")] Fuzzy,
		[DataMember(Name = "NEAR")] Near,
		[DataMember(Name = "SLOP")] Slop,
		[DataMember(Name = "ALL")] All
	}
}
