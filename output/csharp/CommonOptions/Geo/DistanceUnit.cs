
using System.Runtime.Serialization;

namespace Nest.CommonOptions {

	public enum DistanceUnit {
  
		[DataMember(Name = "in")] In,
		[DataMember(Name = "ft")] Ft,
		[DataMember(Name = "yd")] Yd,
		[DataMember(Name = "mi")] Mi,
		[DataMember(Name = "nmi")] Nmi,
		[DataMember(Name = "km")] Km,
		[DataMember(Name = "m")] M,
		[DataMember(Name = "cm")] Cm,
		[DataMember(Name = "mm")] Mm
	}
}
