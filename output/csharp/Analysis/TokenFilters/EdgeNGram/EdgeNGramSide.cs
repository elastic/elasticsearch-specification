
using System.Runtime.Serialization;

namespace Nest.Analysis {

	public enum EdgeNGramSide {
  
		[DataMember(Name = "front")] Front,
		[DataMember(Name = "back")] Back
	}
}
