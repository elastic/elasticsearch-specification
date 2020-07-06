using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class ShardPath  {
		
		[DataMember(Name="data_path")]
		public string DataPath { get; set; }


		[DataMember(Name="is_custom_data_path")]
		public bool IsCustomDataPath { get; set; }


		[DataMember(Name="state_path")]
		public string StatePath { get; set; }

	}
}
