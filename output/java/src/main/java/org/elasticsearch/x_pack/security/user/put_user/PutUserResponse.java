
package org.elasticsearch.x_pack.security.user.put_user;

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

public class PutUserResponse extends ResponseBase<PutUserResponse> implements XContentable<PutUserResponse> {
  
  static final ParseField CREATED = new ParseField("created");
  private Boolean _created;
  public Boolean getCreated() { return this._created; }
  public PutUserResponse setCreated(Boolean val) { this._created = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_created != null) {
      builder.field(CREATED.getPreferredName(), _created);
    }
  }

  @Override
  public PutUserResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PutUserResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PutUserResponse, Void> PARSER =
    new ObjectParser<>(PutUserResponse.class.getName(), false, PutUserResponse::new);

  static {
    PARSER.declareBoolean(PutUserResponse::setCreated, CREATED);
  }

}
