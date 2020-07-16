using Nest.CommonAbstractions;
using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class Like : Union<string, LikeDocument> {

		public Like(string val1) : base(val1) { }

		public Like(LikeDocument val2) : base(val2) { }

		public static implicit operator Like(string val1) => new Like(val1);

		public static implicit operator Like(LikeDocument val2) => new Like(val2);

	}
}
