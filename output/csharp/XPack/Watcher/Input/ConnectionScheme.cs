
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum ConnectionScheme {
  
		[DataMember(Name = "http")] Http,
		[DataMember(Name = "https")] Https
	}
}
