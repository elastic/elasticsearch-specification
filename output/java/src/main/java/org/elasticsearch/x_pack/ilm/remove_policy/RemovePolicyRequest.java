
package org.elasticsearch.x_pack.ilm.remove_policy;

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

public class RemovePolicyRequest extends RequestBase<RemovePolicyRequest> implements XContentable<RemovePolicyRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public RemovePolicyRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RemovePolicyRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RemovePolicyRequest, Void> PARSER =
    new ObjectParser<>(RemovePolicyRequest.class.getName(), false, RemovePolicyRequest::new);

  static {
    
  }

}
