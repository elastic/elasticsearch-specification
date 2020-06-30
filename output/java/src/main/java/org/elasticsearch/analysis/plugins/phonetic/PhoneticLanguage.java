
package org.elasticsearch.analysis.plugins.phonetic;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum PhoneticLanguage implements XContentable<PhoneticLanguage> {
  Any("any"),
    Comomon("comomon"),
    Cyrillic("cyrillic"),
    English("english"),
    French("french"),
    German("german"),
    Hebrew("hebrew"),
    Hungarian("hungarian"),
    Polish("polish"),
    Romanian("romanian"),
    Russian("russian"),
    Spanish("spanish");
  private final String textRepresentation;

  private PhoneticLanguage(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public PhoneticLanguage fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, PhoneticLanguage, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "any": return PhoneticLanguage.Any;
      case "comomon": return PhoneticLanguage.Comomon;
      case "cyrillic": return PhoneticLanguage.Cyrillic;
      case "english": return PhoneticLanguage.English;
      case "french": return PhoneticLanguage.French;
      case "german": return PhoneticLanguage.German;
      case "hebrew": return PhoneticLanguage.Hebrew;
      case "hungarian": return PhoneticLanguage.Hungarian;
      case "polish": return PhoneticLanguage.Polish;
      case "romanian": return PhoneticLanguage.Romanian;
      case "russian": return PhoneticLanguage.Russian;
      case "spanish": return PhoneticLanguage.Spanish;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, PhoneticLanguage.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
