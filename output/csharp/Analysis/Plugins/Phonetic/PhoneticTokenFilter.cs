using Nest.Analysis;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class PhoneticTokenFilter : TokenFilterBase {
		
		[DataMember(Name="encoder")]
		public PhoneticEncoder Encoder { get; set; }


		[DataMember(Name="languageset")]
		public List<PhoneticLanguage> Languageset { get; set; }


		[DataMember(Name="max_code_len")]
		public int MaxCodeLen { get; set; }


		[DataMember(Name="name_type")]
		public PhoneticNameType NameType { get; set; }


		[DataMember(Name="replace")]
		public bool Replace { get; set; }


		[DataMember(Name="rule_type")]
		public PhoneticRuleType RuleType { get; set; }

	}
}
