
using System.Runtime.Serialization;

namespace Nest.Mapping {

	public enum GeoTree {
  
		[DataMember(Name = "geohash")] Geohash,
		[DataMember(Name = "quadtree")] Quadtree
	}
}
