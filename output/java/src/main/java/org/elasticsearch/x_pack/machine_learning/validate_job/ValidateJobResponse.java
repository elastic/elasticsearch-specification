
package org.elasticsearch.x_pack.machine_learning.validate_job;

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

public class ValidateJobResponse extends AcknowledgedResponseBase implements XContentable<ValidateJobResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public ValidateJobResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ValidateJobResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ValidateJobResponse, Void> PARSER =
    new ObjectParser<>(ValidateJobResponse.class.getName(), false, ValidateJobResponse::new);

  static {
    
  }

}
