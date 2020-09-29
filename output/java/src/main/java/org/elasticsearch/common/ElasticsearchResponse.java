
package org.elasticsearch.common;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class ElasticsearchResponse  implements XContentable<ElasticsearchResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    
  }

  @Override
  public ElasticsearchResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ElasticsearchResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ElasticsearchResponse, Void> PARSER =
    new ObjectParser<>(ElasticsearchResponse.class.getName(), false, ElasticsearchResponse::new);

  static {
    
  }

}
