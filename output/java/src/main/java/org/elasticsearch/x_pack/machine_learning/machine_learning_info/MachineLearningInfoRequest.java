
package org.elasticsearch.x_pack.machine_learning.machine_learning_info;

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

public class MachineLearningInfoRequest extends RequestBase<MachineLearningInfoRequest> implements XContentable<MachineLearningInfoRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public MachineLearningInfoRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MachineLearningInfoRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MachineLearningInfoRequest, Void> PARSER =
    new ObjectParser<>(MachineLearningInfoRequest.class.getName(), false, MachineLearningInfoRequest::new);

  static {
    
  }

}
