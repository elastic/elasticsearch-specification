
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


public class ElasticsearchUrlFormatter  implements XContentable<ElasticsearchUrlFormatter> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    
  }

  @Override
  public ElasticsearchUrlFormatter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ElasticsearchUrlFormatter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ElasticsearchUrlFormatter, Void> PARSER =
    new ObjectParser<>(ElasticsearchUrlFormatter.class.getName(), false, ElasticsearchUrlFormatter::new);

  static {
    
  }

}
