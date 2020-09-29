
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

public class TrimTokenFilter extends TokenFilterBase implements XContentable<TrimTokenFilter> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public TrimTokenFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TrimTokenFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TrimTokenFilter, Void> PARSER =
    new ObjectParser<>(TrimTokenFilter.class.getName(), false, TrimTokenFilter::new);

  static {
    
  }

}
