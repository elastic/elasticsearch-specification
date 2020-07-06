using Nest.Modules;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Modules {

	public class IndicesModuleSettings  {
		
		[DataMember(Name="circuit_breaker_settings")]
		public CircuitBreakerSettings CircuitBreakerSettings { get; set; }


		[DataMember(Name="fielddata_settings")]
		public FielddataSettings FielddataSettings { get; set; }


		[DataMember(Name="qeueries_cache_size")]
		public string QeueriesCacheSize { get; set; }


		[DataMember(Name="recovery_settings")]
		public IndicesRecoverySettings RecoverySettings { get; set; }

	}
}
