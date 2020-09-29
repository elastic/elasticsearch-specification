
package org.elasticsearch.indices.alias_management.get_alias;

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
import org.elasticsearch.internal.*;
import org.elasticsearch.indices.alias_management.get_alias.*;

public class GetAliasResponse extends DictionaryResponseBase<String, IndexAliases> implements XContentable<GetAliasResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public GetAliasResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetAliasResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetAliasResponse, Void> PARSER =
    new ObjectParser<>(GetAliasResponse.class.getName(), false, GetAliasResponse::new);

  static {
    
  }

}
