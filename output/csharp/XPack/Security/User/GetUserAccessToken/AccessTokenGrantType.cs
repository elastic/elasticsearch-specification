
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum AccessTokenGrantType {
  
		[DataMember(Name = "password")] Password
	}
}
