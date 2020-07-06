
using System.Runtime.Serialization;

namespace Nest.Analysis {

	public enum IcuNormalizationType {
  
		[DataMember(Name = "nfc")] Nfc,
		[DataMember(Name = "nfkc")] Nfkc,
		[DataMember(Name = "nfkc_cf")] NfkcCf
	}
}
