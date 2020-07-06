
using System.Runtime.Serialization;

namespace Nest.Analysis {

	public enum SnowballLanguage {
  
		[DataMember(Name = "Armenian")] Armenian,
		[DataMember(Name = "Basque")] Basque,
		[DataMember(Name = "Catalan")] Catalan,
		[DataMember(Name = "Danish")] Danish,
		[DataMember(Name = "Dutch")] Dutch,
		[DataMember(Name = "English")] English,
		[DataMember(Name = "Finnish")] Finnish,
		[DataMember(Name = "French")] French,
		[DataMember(Name = "German")] German,
		[DataMember(Name = "German2")] German2,
		[DataMember(Name = "Hungarian")] Hungarian,
		[DataMember(Name = "Italian")] Italian,
		[DataMember(Name = "Kp")] Kp,
		[DataMember(Name = "Lovins")] Lovins,
		[DataMember(Name = "Norwegian")] Norwegian,
		[DataMember(Name = "Porter")] Porter,
		[DataMember(Name = "Portuguese")] Portuguese,
		[DataMember(Name = "Romanian")] Romanian,
		[DataMember(Name = "Russian")] Russian,
		[DataMember(Name = "Spanish")] Spanish,
		[DataMember(Name = "Swedish")] Swedish,
		[DataMember(Name = "Turkish")] Turkish
	}
}
