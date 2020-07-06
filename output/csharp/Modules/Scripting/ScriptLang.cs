
using System.Runtime.Serialization;

namespace Nest.Modules {

	public enum ScriptLang {
  
		[DataMember(Name = "painless")] Painless,
		[DataMember(Name = "expression")] Expression,
		[DataMember(Name = "mustache")] Mustache
	}
}
