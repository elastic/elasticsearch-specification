
package org.elasticsearch.indices.alias_management.alias;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_abstractions.response.*;

public class BulkAliasResponse extends AcknowledgedResponseBase implements XContentable<BulkAliasResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
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
