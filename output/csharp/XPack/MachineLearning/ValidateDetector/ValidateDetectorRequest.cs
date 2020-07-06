using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ValidateDetectorRequest : RequestBase {
		
		[DataMember(Name="detector")]
		public Detector Detector { get; set; }

	}
}
