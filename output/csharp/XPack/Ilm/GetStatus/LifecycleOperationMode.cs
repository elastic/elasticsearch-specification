
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum LifecycleOperationMode {
  
		[DataMember(Name = "RUNNING")] Running,
		[DataMember(Name = "STOPPING")] Stopping,
		[DataMember(Name = "STOPPED")] Stopped
	}
}
