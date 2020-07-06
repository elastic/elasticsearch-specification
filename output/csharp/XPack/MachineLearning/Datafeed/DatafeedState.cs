
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum DatafeedState {
  
		[DataMember(Name = "started")] Started,
		[DataMember(Name = "stopped")] Stopped,
		[DataMember(Name = "starting")] Starting,
		[DataMember(Name = "stopping")] Stopping
	}
}
