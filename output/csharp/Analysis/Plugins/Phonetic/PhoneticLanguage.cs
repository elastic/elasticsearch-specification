
using System.Runtime.Serialization;

namespace Nest.Analysis {

	public enum PhoneticLanguage {
  
		[DataMember(Name = "any")] Any,
		[DataMember(Name = "comomon")] Comomon,
		[DataMember(Name = "cyrillic")] Cyrillic,
		[DataMember(Name = "english")] English,
		[DataMember(Name = "french")] French,
		[DataMember(Name = "german")] German,
		[DataMember(Name = "hebrew")] Hebrew,
		[DataMember(Name = "hungarian")] Hungarian,
		[DataMember(Name = "polish")] Polish,
		[DataMember(Name = "romanian")] Romanian,
		[DataMember(Name = "russian")] Russian,
		[DataMember(Name = "spanish")] Spanish
	}
}
