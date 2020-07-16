using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Modules {

	public class FielddataSettings  {
		
		[DataMember(Name="cache_expire")]
		public Time CacheExpire { get; set; }


		[DataMember(Name="cache_size")]
		public string CacheSize { get; set; }

	}
}
