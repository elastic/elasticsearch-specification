
using System.Runtime.Serialization;

namespace Nest.Cat {

	public enum TransformType {
  
		[DataMember(Name = "batch")] Batch,
		[DataMember(Name = "continuous")] Continuous
	}
}
