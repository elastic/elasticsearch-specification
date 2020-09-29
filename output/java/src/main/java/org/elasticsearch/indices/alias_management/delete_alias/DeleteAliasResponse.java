
package org.elasticsearch.indices.alias_management.delete_alias;

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

public class DeleteAliasResponse extends ResponseBase<DeleteAliasResponse> implements XContentable<DeleteAliasResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public DeleteAliasResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteAliasResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteAliasResponse, Void> PARSER =
    new ObjectParser<>(DeleteAliasResponse.class.getName(), false, DeleteAliasResponse::new);

  static {
    
  }

}
