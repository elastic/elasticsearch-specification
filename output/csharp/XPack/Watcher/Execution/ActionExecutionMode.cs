
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum ActionExecutionMode {
  
		[DataMember(Name = "simulate")] Simulate,
		[DataMember(Name = "force_simulate")] ForceSimulate,
		[DataMember(Name = "execute")] Execute,
		[DataMember(Name = "force_execute")] ForceExecute,
		[DataMember(Name = "skip")] Skip
	}
}
