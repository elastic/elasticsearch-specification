
package org.elasticsearch.analysis.token_filters;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.analysis.token_filters.*;

public class TruncateTokenFilter extends TokenFilterBase implements XContentable<TruncateTokenFilter> {
  
  static final ParseField LENGTH = new ParseField("length");
  private int _length;
  private boolean _length$isSet;
  public int getLength() { return this._length; }
  public TruncateTokenFilter setLength(int val) {
    this._length = val;
    _length$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_length$isSet) {
      builder.field(LENGTH.getPreferredName(), _length);
    }
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
