
using System.Runtime.Serialization;

namespace Nest.Mapping {

	public enum GeoOrientation {
  
		[DataMember(Name = "ClockWise")] ClockWise,
		[DataMember(Name = "CounterClockWise")] CounterClockWise
	}
}
