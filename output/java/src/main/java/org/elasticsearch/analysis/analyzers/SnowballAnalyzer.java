
package org.elasticsearch.analysis.analyzers;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.Either;
import org.elasticsearch.XContentable;
import org.elasticsearch.NamedContainer;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.analysis.languages.*;
import org.elasticsearch.analysis.*;

public class SnowballAnalyzer  implements XContentable<SnowballAnalyzer> {
  
  static final ParseField LANGUAGE = new ParseField("language");
  private SnowballLanguage _language;
  public SnowballLanguage getLanguage() { return this._language; }
  public SnowballAnalyzer setLanguage(SnowballLanguage val) { this._language = val; return this; }


  static final ParseField STOPWORDS = new ParseField("stopwords");
  private StopWords _stopwords;
  public StopWords getStopwords() { return this._stopwords; }
  public SnowballAnalyzer setStopwords(StopWords val) { this._stopwords = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_language != null) {
      builder.field(LANGUAGE.getPreferredName());
      _language.toXContent(builder, params);
    }
    if (_stopwords != null) {
      builder.field(STOPWORDS.getPreferredName());
      _stopwords.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SnowballAnalyzer fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SnowballAnalyzer.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SnowballAnalyzer, Void> PARSER =
    new ObjectParser<>(SnowballAnalyzer.class.getName(), false, SnowballAnalyzer::new);

  static {
    PARSER.declareField(SnowballAnalyzer::setLanguage, (p, t) -> SnowballLanguage.PARSER.apply(p), LANGUAGE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareObject(SnowballAnalyzer::setStopwords, (p, t) -> new StopWords().fromXContent(p), STOPWORDS);
  }

}
