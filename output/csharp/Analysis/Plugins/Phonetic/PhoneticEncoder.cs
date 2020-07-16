
using System.Runtime.Serialization;

namespace Nest.Analysis {

	public enum PhoneticEncoder {
  
		[DataMember(Name = "metaphone")] Metaphone,
		[DataMember(Name = "double_metaphone")] DoubleMetaphone,
		[DataMember(Name = "soundex")] Soundex,
		[DataMember(Name = "refined_soundex")] RefinedSoundex,
		[DataMember(Name = "caverphone1")] Caverphone1,
		[DataMember(Name = "caverphone2")] Caverphone2,
		[DataMember(Name = "cologne")] Cologne,
		[DataMember(Name = "nysiis")] Nysiis,
		[DataMember(Name = "koelnerphonetik")] Koelnerphonetik,
		[DataMember(Name = "haasephonetik")] Haasephonetik,
		[DataMember(Name = "beider_morse")] BeiderMorse,
		[DataMember(Name = "daitch_mokotoff")] DaitchMokotoff
	}
}
