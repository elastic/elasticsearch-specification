
using System.Runtime.Serialization;

namespace Nest.Modules {

	public enum FielddataLoading {
  
		[DataMember(Name = "eager")] Eager,
		[DataMember(Name = "eager_global_ordinals")] EagerGlobalOrdinals
	}
}
