
package org.elasticsearch.x_pack.cross_cluster_replication.stats;

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


public class CcrStatsRequest  implements XContentable<CcrStatsRequest> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public CcrStatsRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CcrStatsRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CcrStatsRequest, Void> PARSER =
    new ObjectParser<>(CcrStatsRequest.class.getName(), false, CcrStatsRequest::new);

  static {
    
  }

}
