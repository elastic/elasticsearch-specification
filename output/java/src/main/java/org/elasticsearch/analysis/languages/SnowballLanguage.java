
package org.elasticsearch.analysis.languages;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum SnowballLanguage implements XContentable<SnowballLanguage> {
  Armenian("Armenian"),
    Basque("Basque"),
    Catalan("Catalan"),
    Danish("Danish"),
    Dutch("Dutch"),
    English("English"),
    Finnish("Finnish"),
    French("French"),
    German("German"),
    German2("German2"),
    Hungarian("Hungarian"),
    Italian("Italian"),
    Kp("Kp"),
    Lovins("Lovins"),
    Norwegian("Norwegian"),
    Porter("Porter"),
    Portuguese("Portuguese"),
    Romanian("Romanian"),
    Russian("Russian"),
    Spanish("Spanish"),
    Swedish("Swedish"),
    Turkish("Turkish");
  private final String textRepresentation;

  private SnowballLanguage(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public SnowballLanguage fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, SnowballLanguage, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "Armenian": return SnowballLanguage.Armenian;
      case "Basque": return SnowballLanguage.Basque;
      case "Catalan": return SnowballLanguage.Catalan;
      case "Danish": return SnowballLanguage.Danish;
      case "Dutch": return SnowballLanguage.Dutch;
      case "English": return SnowballLanguage.English;
      case "Finnish": return SnowballLanguage.Finnish;
      case "French": return SnowballLanguage.French;
      case "German": return SnowballLanguage.German;
      case "German2": return SnowballLanguage.German2;
      case "Hungarian": return SnowballLanguage.Hungarian;
      case "Italian": return SnowballLanguage.Italian;
      case "Kp": return SnowballLanguage.Kp;
      case "Lovins": return SnowballLanguage.Lovins;
      case "Norwegian": return SnowballLanguage.Norwegian;
      case "Porter": return SnowballLanguage.Porter;
      case "Portuguese": return SnowballLanguage.Portuguese;
      case "Romanian": return SnowballLanguage.Romanian;
      case "Russian": return SnowballLanguage.Russian;
      case "Spanish": return SnowballLanguage.Spanish;
      case "Swedish": return SnowballLanguage.Swedish;
      case "Turkish": return SnowballLanguage.Turkish;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, SnowballLanguage.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
