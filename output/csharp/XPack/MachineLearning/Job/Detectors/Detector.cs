using Nest.XPack;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class Detector  {
		
		[DataMember(Name="custom_rules")]
		public List<DetectionRule> CustomRules { get; set; }


		[DataMember(Name="detector_description")]
		public string DetectorDescription { get; set; }


		[DataMember(Name="detector_index")]
		public int DetectorIndex { get; set; }


		[DataMember(Name="exclude_frequent")]
		public ExcludeFrequent ExcludeFrequent { get; set; }


		[DataMember(Name="function")]
		public string Function { get; set; }


		[DataMember(Name="use_null")]
		public bool UseNull { get; set; }

	}
}
