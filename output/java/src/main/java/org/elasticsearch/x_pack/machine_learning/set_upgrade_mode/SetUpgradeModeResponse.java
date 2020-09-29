
package org.elasticsearch.x_pack.machine_learning.set_upgrade_mode;

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

public class SetUpgradeModeResponse extends AcknowledgedResponseBase implements XContentable<SetUpgradeModeResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public SetUpgradeModeResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SetUpgradeModeResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SetUpgradeModeResponse, Void> PARSER =
    new ObjectParser<>(SetUpgradeModeResponse.class.getName(), false, SetUpgradeModeResponse::new);

  static {
    
  }

}
