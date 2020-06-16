
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


public class NoriPartOfSpeechTokenFilter  implements XContentable<NoriPartOfSpeechTokenFilter> {
  
  static final ParseField STOPTAGS = new ParseField("stoptags");
  private List<String> _stoptags;
  public List<String> getStoptags() { return this._stoptags; }
  public NoriPartOfSpeechTokenFilter setStoptags(List<String> val) { this._stoptags = val; return this; }


  
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
  public NoriPartOfSpeechTokenFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NoriPartOfSpeechTokenFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NoriPartOfSpeechTokenFilter, Void> PARSER =
    new ObjectParser<>(NoriPartOfSpeechTokenFilter.class.getName(), false, NoriPartOfSpeechTokenFilter::new);

  static {
    PARSER.declareStringArray(NoriPartOfSpeechTokenFilter::setStoptags, STOPTAGS);
  }

}
