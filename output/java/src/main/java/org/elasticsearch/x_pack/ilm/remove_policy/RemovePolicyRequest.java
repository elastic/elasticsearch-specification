
package org.elasticsearch.x_pack.ilm.remove_policy;

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


public class RemovePolicyRequest  implements XContentable<RemovePolicyRequest> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
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
