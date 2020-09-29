
package org.elasticsearch.x_pack.security.privileges.delete_privileges;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class FoundUserPrivilege  implements XContentable<FoundUserPrivilege> {
  
  static final ParseField FOUND = new ParseField("found");
  private Boolean _found;
  public Boolean getFound() { return this._found; }
  public FoundUserPrivilege setFound(Boolean val) { this._found = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_found != null) {
      builder.field(FOUND.getPreferredName(), _found);
    }
  }

  @Override
  public FoundUserPrivilege fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FoundUserPrivilege.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FoundUserPrivilege, Void> PARSER =
    new ObjectParser<>(FoundUserPrivilege.class.getName(), false, FoundUserPrivilege::new);

  static {
    PARSER.declareBoolean(FoundUserPrivilege::setFound, FOUND);
  }

}
