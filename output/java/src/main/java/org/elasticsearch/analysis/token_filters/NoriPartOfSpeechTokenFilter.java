
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
import org.elasticsearch.analysis.token_filters.*;

public class NoriPartOfSpeechTokenFilter extends TokenFilterBase implements XContentable<NoriPartOfSpeechTokenFilter> {
  
  static final ParseField STOPTAGS = new ParseField("stoptags");
  private List<String> _stoptags;
  public List<String> getStoptags() { return this._stoptags; }
  public NoriPartOfSpeechTokenFilter setStoptags(List<String> val) { this._stoptags = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_stoptags != null) {
      builder.array(STOPTAGS.getPreferredName(), _stoptags);
    }
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
