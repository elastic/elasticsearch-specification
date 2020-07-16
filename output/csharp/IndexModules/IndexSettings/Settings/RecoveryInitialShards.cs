
using System.Runtime.Serialization;

namespace Nest.IndexModules {

	public enum RecoveryInitialShards {
  
		[DataMember(Name = "quorem")] Quorem,
		[DataMember(Name = "quorem-1")] Quorem_1,
		[DataMember(Name = "full")] Full,
		[DataMember(Name = "full-1")] Full_1
	}
}
