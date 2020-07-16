
using System.Runtime.Serialization;

namespace Nest.Search {

	public enum SortSpecialField {
  
		[DataMember(Name = "_score")] Score,
		[DataMember(Name = "_doc")] Doc
	}
}
