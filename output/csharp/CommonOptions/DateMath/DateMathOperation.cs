
using System.Runtime.Serialization;

namespace Nest.CommonOptions {

	public enum DateMathOperation {
  
		[DataMember(Name = "+")] Add,
		[DataMember(Name = "-")] Subtract
	}
}
