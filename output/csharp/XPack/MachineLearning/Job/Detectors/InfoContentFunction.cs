
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum InfoContentFunction {
  
		[DataMember(Name = "InfoContent")] InfoContent,
		[DataMember(Name = "HighInfoContent")] HighInfoContent,
		[DataMember(Name = "LowInfoContent")] LowInfoContent
	}
}
