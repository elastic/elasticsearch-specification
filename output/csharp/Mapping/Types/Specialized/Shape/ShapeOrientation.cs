
using System.Runtime.Serialization;

namespace Nest.Mapping {

	public enum ShapeOrientation {
  
		[DataMember(Name = "ClockWise")] ClockWise,
		[DataMember(Name = "CounterClockWise")] CounterClockWise
	}
}
