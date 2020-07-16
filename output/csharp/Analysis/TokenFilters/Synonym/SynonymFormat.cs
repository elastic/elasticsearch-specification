
using System.Runtime.Serialization;

namespace Nest.Analysis {

	public enum SynonymFormat {
  
		[DataMember(Name = "solr")] Solr,
		[DataMember(Name = "wordnet")] Wordnet
	}
}
