using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.CommonOptions {

	public class MinimumShouldMatch : Union<int, string> {

		public MinimumShouldMatch(int val1) : base(val1) { }

		public MinimumShouldMatch(string val2) : base(val2) { }

		public static implicit operator MinimumShouldMatch(int val1) => new MinimumShouldMatch(val1);

		public static implicit operator MinimumShouldMatch(string val2) => new MinimumShouldMatch(val2);

	}
}
