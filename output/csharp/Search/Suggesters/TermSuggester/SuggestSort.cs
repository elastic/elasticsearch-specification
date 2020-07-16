
using System.Runtime.Serialization;

namespace Nest.Search {

	public enum SuggestSort {
  
		[DataMember(Name = "score")] Score,
		[DataMember(Name = "frequency")] Frequency
	}
}
