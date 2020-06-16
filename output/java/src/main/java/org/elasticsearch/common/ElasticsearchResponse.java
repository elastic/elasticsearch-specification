
package org.elasticsearch.common;

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


public class ElasticsearchResponse  implements XContentable<ElasticsearchResponse> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
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
