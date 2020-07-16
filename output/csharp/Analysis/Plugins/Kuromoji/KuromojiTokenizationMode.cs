
using System.Runtime.Serialization;

namespace Nest.Analysis {

	public enum KuromojiTokenizationMode {
  
		[DataMember(Name = "normal")] Normal,
		[DataMember(Name = "search")] Search,
		[DataMember(Name = "extended")] Extended
	}
}
