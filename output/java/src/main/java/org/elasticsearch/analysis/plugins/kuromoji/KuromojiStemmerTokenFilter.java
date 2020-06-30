
package org.elasticsearch.analysis.plugins.kuromoji;

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

public class KuromojiStemmerTokenFilter  implements XContentable<KuromojiStemmerTokenFilter> {
  
  static final ParseField MINIMUM_LENGTH = new ParseField("minimum_length");
  private Integer _minimumLength;
  public Integer getMinimumLength() { return this._minimumLength; }
  public KuromojiStemmerTokenFilter setMinimumLength(Integer val) { this._minimumLength = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_minimumLength != null) {
      builder.field(MINIMUM_LENGTH.getPreferredName(), _minimumLength);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public KuromojiStemmerTokenFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return KuromojiStemmerTokenFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<KuromojiStemmerTokenFilter, Void> PARSER =
    new ObjectParser<>(KuromojiStemmerTokenFilter.class.getName(), false, KuromojiStemmerTokenFilter::new);

  static {
    PARSER.declareInt(KuromojiStemmerTokenFilter::setMinimumLength, MINIMUM_LENGTH);
  }

}
