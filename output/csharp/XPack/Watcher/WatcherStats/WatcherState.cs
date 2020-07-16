
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum WatcherState {
  
		[DataMember(Name = "stopped")] Stopped,
		[DataMember(Name = "starting")] Starting,
		[DataMember(Name = "started")] Started,
		[DataMember(Name = "stopping")] Stopping
	}
}
