
package org.elasticsearch.x_pack.roll_up.rollup_search;

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

public class RollupSearchResponse<TDocument> extends ResponseBase<RollupSearchResponse> implements XContentable<RollupSearchResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public RollupSearchResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RollupSearchResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RollupSearchResponse, Void> PARSER =
    new ObjectParser<>(RollupSearchResponse.class.getName(), false, RollupSearchResponse::new);

  static {
    
  }

}
