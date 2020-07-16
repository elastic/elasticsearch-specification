
using System.Runtime.Serialization;

namespace Nest.IndexModules {

	public enum DfiIndependenceMeasure {
  
		[DataMember(Name = "standardized")] Standardized,
		[DataMember(Name = "saturated")] Saturated,
		[DataMember(Name = "chisquared")] Chisquared
	}
}
