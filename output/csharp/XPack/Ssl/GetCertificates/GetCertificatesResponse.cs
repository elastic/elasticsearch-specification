using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GetCertificatesResponse : IResponse {
		
		[DataMember(Name="certificates")]
		public List<ClusterCertificateInformation> Certificates { get; set; }

	}
}
