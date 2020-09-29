
package org.elasticsearch.x_pack.roll_up.get_rollup_capabilities;

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
import org.elasticsearch.x_pack.roll_up.get_rollup_capabilities.*;

public class GetRollupCapabilitiesResponse extends DictionaryResponseBase<String, RollupCapabilities> implements XContentable<GetRollupCapabilitiesResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public GetRollupCapabilitiesResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetRollupCapabilitiesResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetRollupCapabilitiesResponse, Void> PARSER =
    new ObjectParser<>(GetRollupCapabilitiesResponse.class.getName(), false, GetRollupCapabilitiesResponse::new);

  static {
    
  }

}
