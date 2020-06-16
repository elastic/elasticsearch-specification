
package org.elasticsearch.analysis.token_filters;

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

public class SnowballTokenFilter  implements XContentable<SnowballTokenFilter> {
  
  static final ParseField LANGUAGE = new ParseField("language");
  private SnowballLanguage _language;
  public SnowballLanguage getLanguage() { return this._language; }
  public SnowballTokenFilter setLanguage(SnowballLanguage val) { this._language = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_language != null) {
      builder.field(LANGUAGE.getPreferredName());
      _language.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SnowballTokenFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SnowballTokenFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SnowballTokenFilter, Void> PARSER =
    new ObjectParser<>(SnowballTokenFilter.class.getName(), false, SnowballTokenFilter::new);

  static {
    PARSER.declareField(SnowballTokenFilter::setLanguage, (p, t) -> SnowballLanguage.PARSER.apply(p), LANGUAGE, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
