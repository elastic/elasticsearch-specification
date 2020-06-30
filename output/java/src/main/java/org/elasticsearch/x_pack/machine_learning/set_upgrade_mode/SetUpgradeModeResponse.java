
package org.elasticsearch.x_pack.machine_learning.set_upgrade_mode;

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


public class SetUpgradeModeResponse  implements XContentable<SetUpgradeModeResponse> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
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
