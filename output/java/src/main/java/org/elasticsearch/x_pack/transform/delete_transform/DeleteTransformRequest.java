
package org.elasticsearch.x_pack.transform.delete_transform;

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

public class DeleteTransformRequest extends RequestBase<DeleteTransformRequest> implements XContentable<DeleteTransformRequest> {
  
  static final ParseField FORCE = new ParseField("force");
  private Boolean _force;
  public Boolean getForce() { return this._force; }
  public DeleteTransformRequest setForce(Boolean val) { this._force = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_force != null) {
      builder.field(FORCE.getPreferredName(), _force);
    }
  }

  @Override
  public DeleteTransformRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteTransformRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteTransformRequest, Void> PARSER =
    new ObjectParser<>(DeleteTransformRequest.class.getName(), false, DeleteTransformRequest::new);

  static {
    PARSER.declareBoolean(DeleteTransformRequest::setForce, FORCE);
  }

}
