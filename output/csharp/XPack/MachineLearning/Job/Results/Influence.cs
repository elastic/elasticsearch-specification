using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class Influence  {
		
		[DataMember(Name="influencer_field_name")]
		public string InfluencerFieldName { get; set; }


		[DataMember(Name="influencer_field_values")]
		public List<string> InfluencerFieldValues { get; set; }

	}
}
