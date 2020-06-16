
package org.elasticsearch.modules.indices.fielddata;

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


public class FielddataRegexFilter  implements XContentable<FielddataRegexFilter> {
  
  static final ParseField PATTERN = new ParseField("pattern");
  private String _pattern;
  public String getPattern() { return this._pattern; }
  public FielddataRegexFilter setPattern(String val) { this._pattern = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_pattern != null) {
      builder.field(PATTERN.getPreferredName(), _pattern);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public FielddataRegexFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FielddataRegexFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FielddataRegexFilter, Void> PARSER =
    new ObjectParser<>(FielddataRegexFilter.class.getName(), false, FielddataRegexFilter::new);

  static {
    PARSER.declareString(FielddataRegexFilter::setPattern, PATTERN);
  }

}
