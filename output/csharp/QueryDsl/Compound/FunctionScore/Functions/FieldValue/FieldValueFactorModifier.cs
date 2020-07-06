
using System.Runtime.Serialization;

namespace Nest.QueryDsl {

	public enum FieldValueFactorModifier {
  
		[DataMember(Name = "none")] None,
		[DataMember(Name = "log")] Log,
		[DataMember(Name = "log1p")] Log1p,
		[DataMember(Name = "log2p")] Log2p,
		[DataMember(Name = "ln")] Ln,
		[DataMember(Name = "ln1p")] Ln1p,
		[DataMember(Name = "ln2p")] Ln2p,
		[DataMember(Name = "square")] Square,
		[DataMember(Name = "sqrt")] Sqrt,
		[DataMember(Name = "reciprocal")] Reciprocal
	}
}
