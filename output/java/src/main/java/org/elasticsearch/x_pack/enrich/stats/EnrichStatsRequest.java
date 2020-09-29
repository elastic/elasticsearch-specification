
package org.elasticsearch.x_pack.enrich.stats;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_abstractions.request.*;

public class EnrichStatsRequest extends RequestBase<EnrichStatsRequest> implements XContentable<EnrichStatsRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public EnrichStatsRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return EnrichStatsRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<EnrichStatsRequest, Void> PARSER =
    new ObjectParser<>(EnrichStatsRequest.class.getName(), false, EnrichStatsRequest::new);

  static {
    
  }

}
