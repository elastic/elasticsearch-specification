
package org.elasticsearch.x_pack.ilm.get_lifecycle;

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
import org.elasticsearch.x_pack.ilm.get_lifecycle.*;

public class GetLifecycleResponse extends DictionaryResponseBase<String, LifecyclePolicy> implements XContentable<GetLifecycleResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public GetLifecycleResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetLifecycleResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetLifecycleResponse, Void> PARSER =
    new ObjectParser<>(GetLifecycleResponse.class.getName(), false, GetLifecycleResponse::new);

  static {
    
  }

}
