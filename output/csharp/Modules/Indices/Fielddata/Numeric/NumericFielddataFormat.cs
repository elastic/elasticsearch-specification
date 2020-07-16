
using System.Runtime.Serialization;

namespace Nest.Modules {

	public enum NumericFielddataFormat {
  
		[DataMember(Name = "array")] Array,
		[DataMember(Name = "disabled")] Disabled
	}
}
