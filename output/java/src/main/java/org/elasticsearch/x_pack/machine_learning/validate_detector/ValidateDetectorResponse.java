
package org.elasticsearch.x_pack.machine_learning.validate_detector;

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

public class ValidateDetectorResponse extends AcknowledgedResponseBase implements XContentable<ValidateDetectorResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public ValidateDetectorResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ValidateDetectorResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ValidateDetectorResponse, Void> PARSER =
    new ObjectParser<>(ValidateDetectorResponse.class.getName(), false, ValidateDetectorResponse::new);

  static {
    
  }

}
