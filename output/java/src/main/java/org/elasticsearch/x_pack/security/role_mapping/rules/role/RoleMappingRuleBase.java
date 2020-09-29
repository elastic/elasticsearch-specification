
package org.elasticsearch.x_pack.security.role_mapping.rules.role;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class RoleMappingRuleBase  implements XContentable<RoleMappingRuleBase> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    
  }

  @Override
  public RoleMappingRuleBase fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RoleMappingRuleBase.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RoleMappingRuleBase, Void> PARSER =
    new ObjectParser<>(RoleMappingRuleBase.class.getName(), false, RoleMappingRuleBase::new);

  static {
    
  }

}
