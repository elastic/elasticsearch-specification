
package org.elasticsearch.x_pack.ilm.move_to_step;

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

public class MoveToStepResponse extends AcknowledgedResponseBase implements XContentable<MoveToStepResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public MoveToStepResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MoveToStepResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MoveToStepResponse, Void> PARSER =
    new ObjectParser<>(MoveToStepResponse.class.getName(), false, MoveToStepResponse::new);

  static {
    
  }

}
