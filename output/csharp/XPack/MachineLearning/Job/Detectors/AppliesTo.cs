
using System.Runtime.Serialization;

namespace Nest.XPack {

	public enum AppliesTo {
  
		[DataMember(Name = "actual")] Actual,
		[DataMember(Name = "typical")] Typical,
		[DataMember(Name = "diff_from_typical")] DiffFromTypical,
		[DataMember(Name = "time")] Time
	}
}
