
package org.elasticsearch.indices.alias_management.alias;

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


public class BulkAliasResponse  implements XContentable<BulkAliasResponse> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public BulkAliasResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return BulkAliasResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<BulkAliasResponse, Void> PARSER =
    new ObjectParser<>(BulkAliasResponse.class.getName(), false, BulkAliasResponse::new);

  static {
    
  }

}
