
using System.Runtime.Serialization;

namespace Nest.Analysis {

	public enum KeepTypesMode {
  
		[DataMember(Name = "include")] Include,
		[DataMember(Name = "exclude")] Exclude
	}
}
