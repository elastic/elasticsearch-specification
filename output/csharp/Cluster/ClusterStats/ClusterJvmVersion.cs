using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ClusterJvmVersion  {
		
		[DataMember(Name="bundled_jdk")]
		public bool BundledJdk { get; set; }


		[DataMember(Name="count")]
		public int Count { get; set; }


		[DataMember(Name="using_bundled_jdk")]
		public bool UsingBundledJdk { get; set; }


		[DataMember(Name="version")]
		public string Version { get; set; }


		[DataMember(Name="vm_name")]
		public string VmName { get; set; }


		[DataMember(Name="vm_vendor")]
		public string VmVendor { get; set; }


		[DataMember(Name="vm_version")]
		public string VmVersion { get; set; }

	}
}
