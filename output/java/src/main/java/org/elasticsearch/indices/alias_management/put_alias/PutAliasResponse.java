
package org.elasticsearch.indices.alias_management.put_alias;

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

public class PutAliasResponse extends ResponseBase<PutAliasResponse> implements XContentable<PutAliasResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public PutAliasResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PutAliasResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PutAliasResponse, Void> PARSER =
    new ObjectParser<>(PutAliasResponse.class.getName(), false, PutAliasResponse::new);

  static {
    
  }

}
