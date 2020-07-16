
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum RareFunction {
  
		[DataMember(Name = "Rare")] Rare,
		[DataMember(Name = "FreqRare")] FreqRare
	}
}
