
using System.Runtime.Serialization;

namespace Nest.IndexModules {

	public enum DfrBasicModel {
  
		[DataMember(Name = "be")] Be,
		[DataMember(Name = "d")] D,
		[DataMember(Name = "g")] G,
		[DataMember(Name = "if")] If,
		[DataMember(Name = "in")] In,
		[DataMember(Name = "ine")] Ine,
		[DataMember(Name = "p")] P
	}
}
