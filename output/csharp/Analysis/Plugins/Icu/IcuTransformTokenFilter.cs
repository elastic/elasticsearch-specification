using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class IcuTransformTokenFilter : TokenFilterBase {
		
		[DataMember(Name="dir")]
		public IcuTransformDirection Dir { get; set; }


		[DataMember(Name="id")]
		public string Id { get; set; }

	}
}
