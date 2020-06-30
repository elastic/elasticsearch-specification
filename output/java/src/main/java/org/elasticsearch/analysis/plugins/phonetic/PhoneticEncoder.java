
package org.elasticsearch.analysis.plugins.phonetic;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum PhoneticEncoder implements XContentable<PhoneticEncoder> {
  Metaphone("metaphone"),
    DoubleMetaphone("double_metaphone"),
    Soundex("soundex"),
    RefinedSoundex("refined_soundex"),
    Caverphone1("caverphone1"),
    Caverphone2("caverphone2"),
    Cologne("cologne"),
    Nysiis("nysiis"),
    Koelnerphonetik("koelnerphonetik"),
    Haasephonetik("haasephonetik"),
    BeiderMorse("beider_morse"),
    DaitchMokotoff("daitch_mokotoff");
  private final String textRepresentation;

  private PhoneticEncoder(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public PhoneticEncoder fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, PhoneticEncoder, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "metaphone": return PhoneticEncoder.Metaphone;
      case "double_metaphone": return PhoneticEncoder.DoubleMetaphone;
      case "soundex": return PhoneticEncoder.Soundex;
      case "refined_soundex": return PhoneticEncoder.RefinedSoundex;
      case "caverphone1": return PhoneticEncoder.Caverphone1;
      case "caverphone2": return PhoneticEncoder.Caverphone2;
      case "cologne": return PhoneticEncoder.Cologne;
      case "nysiis": return PhoneticEncoder.Nysiis;
      case "koelnerphonetik": return PhoneticEncoder.Koelnerphonetik;
      case "haasephonetik": return PhoneticEncoder.Haasephonetik;
      case "beider_morse": return PhoneticEncoder.BeiderMorse;
      case "daitch_mokotoff": return PhoneticEncoder.DaitchMokotoff;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, PhoneticEncoder.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
