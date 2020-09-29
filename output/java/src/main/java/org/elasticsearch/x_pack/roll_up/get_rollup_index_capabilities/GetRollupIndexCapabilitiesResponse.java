
package org.elasticsearch.x_pack.roll_up.get_rollup_index_capabilities;

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
import org.elasticsearch.x_pack.roll_up.get_rollup_index_capabilities.*;

public class GetRollupIndexCapabilitiesResponse extends DictionaryResponseBase<String, RollupIndexCapabilities> implements XContentable<GetRollupIndexCapabilitiesResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public GetRollupIndexCapabilitiesResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetRollupIndexCapabilitiesResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetRollupIndexCapabilitiesResponse, Void> PARSER =
    new ObjectParser<>(GetRollupIndexCapabilitiesResponse.class.getName(), false, GetRollupIndexCapabilitiesResponse::new);

  static {
    
  }

}
