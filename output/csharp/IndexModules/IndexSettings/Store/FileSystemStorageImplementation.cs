
using System.Runtime.Serialization;

namespace Nest.IndexModules {

	public enum FileSystemStorageImplementation {
  
		[DataMember(Name = "simplefs")] Simplefs,
		[DataMember(Name = "niofs")] Niofs,
		[DataMember(Name = "mmapfs")] Mmapfs,
		[DataMember(Name = "default_fs")] DefaultFs
	}
}
