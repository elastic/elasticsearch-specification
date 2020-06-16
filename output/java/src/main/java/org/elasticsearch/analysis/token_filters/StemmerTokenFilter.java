
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


public class StemmerTokenFilter  implements XContentable<StemmerTokenFilter> {
  
  static final ParseField LANGUAGE = new ParseField("language");
  private String _language;
  public String getLanguage() { return this._language; }
  public StemmerTokenFilter setLanguage(String val) { this._language = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_language != null) {
      builder.field(LANGUAGE.getPreferredName(), _language);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public StemmerTokenFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StemmerTokenFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StemmerTokenFilter, Void> PARSER =
    new ObjectParser<>(StemmerTokenFilter.class.getName(), false, StemmerTokenFilter::new);

  static {
    PARSER.declareString(StemmerTokenFilter::setLanguage, LANGUAGE);
  }

}
