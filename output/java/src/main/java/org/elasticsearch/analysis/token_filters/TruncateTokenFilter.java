
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
import org.elasticsearch.internal.*;

public class TruncateTokenFilter  implements XContentable<TruncateTokenFilter> {
  
  static final ParseField LENGTH = new ParseField("length");
  private Integer _length;
  public Integer getLength() { return this._length; }
  public TruncateTokenFilter setLength(Integer val) { this._length = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_length != null) {
      builder.field(LENGTH.getPreferredName(), _length);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public TruncateTokenFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TruncateTokenFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TruncateTokenFilter, Void> PARSER =
    new ObjectParser<>(TruncateTokenFilter.class.getName(), false, TruncateTokenFilter::new);

  static {
    PARSER.declareInt(TruncateTokenFilter::setLength, LENGTH);
  }

}
