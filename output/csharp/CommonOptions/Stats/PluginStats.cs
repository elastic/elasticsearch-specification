using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.CommonOptions {

	public class PluginStats  {
		
		[DataMember(Name="classname")]
		public string Classname { get; set; }


		[DataMember(Name="description")]
		public string Description { get; set; }


		[DataMember(Name="elasticsearch_version")]
		public string ElasticsearchVersion { get; set; }


		[DataMember(Name="extended_plugins")]
		public List<string> ExtendedPlugins { get; set; }


		[DataMember(Name="has_native_controller")]
		public bool HasNativeController { get; set; }


		[DataMember(Name="java_version")]
		public string JavaVersion { get; set; }


		[DataMember(Name="name")]
		public string Name { get; set; }


		[DataMember(Name="version")]
		public string Version { get; set; }

	}
}
