
package org.elasticsearch.analysis.languages;

//
// Generated code - Do not edit (enum)
//

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum Language implements XContentable<Language> {
  Arabic("Arabic"),
    Armenian("Armenian"),
    Basque("Basque"),
    Brazilian("Brazilian"),
    Bulgarian("Bulgarian"),
    Catalan("Catalan"),
    Chinese("Chinese"),
    Cjk("Cjk"),
    Czech("Czech"),
    Danish("Danish"),
    Dutch("Dutch"),
    English("English"),
    Estonian("Estonian"),
    Finnish("Finnish"),
    French("French"),
    Galician("Galician"),
    German("German"),
    Greek("Greek"),
    Hindi("Hindi"),
    Hungarian("Hungarian"),
    Indonesian("Indonesian"),
    Irish("Irish"),
    Italian("Italian"),
    Latvian("Latvian"),
    Norwegian("Norwegian"),
    Persian("Persian"),
    Portuguese("Portuguese"),
    Romanian("Romanian"),
    Russian("Russian"),
    Sorani("Sorani"),
    Spanish("Spanish"),
    Swedish("Swedish"),
    Turkish("Turkish"),
    Thai("Thai");
  private final String textRepresentation;

  private Language(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public Language fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, Language, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "Arabic": return Language.Arabic;
      case "Armenian": return Language.Armenian;
      case "Basque": return Language.Basque;
      case "Brazilian": return Language.Brazilian;
      case "Bulgarian": return Language.Bulgarian;
      case "Catalan": return Language.Catalan;
      case "Chinese": return Language.Chinese;
      case "Cjk": return Language.Cjk;
      case "Czech": return Language.Czech;
      case "Danish": return Language.Danish;
      case "Dutch": return Language.Dutch;
      case "English": return Language.English;
      case "Estonian": return Language.Estonian;
      case "Finnish": return Language.Finnish;
      case "French": return Language.French;
      case "Galician": return Language.Galician;
      case "German": return Language.German;
      case "Greek": return Language.Greek;
      case "Hindi": return Language.Hindi;
      case "Hungarian": return Language.Hungarian;
      case "Indonesian": return Language.Indonesian;
      case "Irish": return Language.Irish;
      case "Italian": return Language.Italian;
      case "Latvian": return Language.Latvian;
      case "Norwegian": return Language.Norwegian;
      case "Persian": return Language.Persian;
      case "Portuguese": return Language.Portuguese;
      case "Romanian": return Language.Romanian;
      case "Russian": return Language.Russian;
      case "Sorani": return Language.Sorani;
      case "Spanish": return Language.Spanish;
      case "Swedish": return Language.Swedish;
      case "Turkish": return Language.Turkish;
      case "Thai": return Language.Thai;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, Language.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
