using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ClusterCertificateInformation  {
		
		[DataMember(Name="alias")]
		public string Alias { get; set; }


		[DataMember(Name="expiry")]
		public DateTimeOffset Expiry { get; set; }


		[DataMember(Name="format")]
		public string Format { get; set; }


		[DataMember(Name="has_private_key")]
		public bool HasPrivateKey { get; set; }


		[DataMember(Name="path")]
		public string Path { get; set; }


		[DataMember(Name="serial_number")]
		public string SerialNumber { get; set; }


		[DataMember(Name="subject_dn")]
		public string SubjectDn { get; set; }

	}
}
