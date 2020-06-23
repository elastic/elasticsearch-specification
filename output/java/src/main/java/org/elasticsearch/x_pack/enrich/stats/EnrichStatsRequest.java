
package org.elasticsearch.x_pack.enrich.stats;

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


public class EnrichStatsRequest  implements XContentable<EnrichStatsRequest> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
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
