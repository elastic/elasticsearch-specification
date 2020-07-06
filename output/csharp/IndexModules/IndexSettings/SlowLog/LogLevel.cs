
using System.Runtime.Serialization;

namespace Nest.IndexModules {

	public enum LogLevel {
  
		[DataMember(Name = "error")] Error,
		[DataMember(Name = "warn")] Warn,
		[DataMember(Name = "info")] Info,
		[DataMember(Name = "debug")] Debug,
		[DataMember(Name = "trace")] Trace
	}
}
