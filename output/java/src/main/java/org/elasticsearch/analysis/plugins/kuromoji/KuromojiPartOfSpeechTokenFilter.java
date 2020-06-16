
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


public class KuromojiPartOfSpeechTokenFilter  implements XContentable<KuromojiPartOfSpeechTokenFilter> {
  
  static final ParseField STOPTAGS = new ParseField("stoptags");
  private List<String> _stoptags;
  public List<String> getStoptags() { return this._stoptags; }
  public KuromojiPartOfSpeechTokenFilter setStoptags(List<String> val) { this._stoptags = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_stoptags != null) {
      builder.array(STOPTAGS.getPreferredName(), _stoptags);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public KuromojiPartOfSpeechTokenFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return KuromojiPartOfSpeechTokenFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<KuromojiPartOfSpeechTokenFilter, Void> PARSER =
    new ObjectParser<>(KuromojiPartOfSpeechTokenFilter.class.getName(), false, KuromojiPartOfSpeechTokenFilter::new);

  static {
    PARSER.declareStringArray(KuromojiPartOfSpeechTokenFilter::setStoptags, STOPTAGS);
  }

}
