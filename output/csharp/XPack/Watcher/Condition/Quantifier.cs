
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum Quantifier {
  
		[DataMember(Name = "some")] Some,
		[DataMember(Name = "all")] All
	}
}
