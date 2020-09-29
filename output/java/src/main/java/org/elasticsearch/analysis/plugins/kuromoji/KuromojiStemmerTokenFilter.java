
package org.elasticsearch.analysis.plugins.kuromoji;

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

public class KuromojiStemmerTokenFilter extends TokenFilterBase implements XContentable<KuromojiStemmerTokenFilter> {
  
  static final ParseField MINIMUM_LENGTH = new ParseField("minimum_length");
  private int _minimumLength;
  private boolean _minimumLength$isSet;
  public int getMinimumLength() { return this._minimumLength; }
  public KuromojiStemmerTokenFilter setMinimumLength(int val) {
    this._minimumLength = val;
    _minimumLength$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_minimumLength$isSet) {
      builder.field(MINIMUM_LENGTH.getPreferredName(), _minimumLength);
    }
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
