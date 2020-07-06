
using System.Runtime.Serialization;

namespace Nest.Modules {

	public enum StringFielddataFormat {
  
		[DataMember(Name = "paged_bytes")] PagedBytes,
		[DataMember(Name = "disabled")] Disabled
	}
}
