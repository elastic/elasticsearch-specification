
package org.elasticsearch.x_pack.cross_cluster_replication.stats;

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

public class CcrStatsRequest extends RequestBase<CcrStatsRequest> implements XContentable<CcrStatsRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
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
