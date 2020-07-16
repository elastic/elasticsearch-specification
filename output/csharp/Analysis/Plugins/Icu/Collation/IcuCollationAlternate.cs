
using System.Runtime.Serialization;

namespace Nest.Analysis {

	public enum IcuCollationAlternate {
  
		[DataMember(Name = "shifted")] Shifted,
		[DataMember(Name = "non-ignorable")] NonIgnorable
	}
}
