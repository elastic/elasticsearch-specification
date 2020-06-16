
package org.elasticsearch.x_pack.transform.delete_transform;

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


public class DeleteTransformRequest  implements XContentable<DeleteTransformRequest> {
  
  static final ParseField FORCE = new ParseField("force");
  private Boolean _force;
  public Boolean getForce() { return this._force; }
  public DeleteTransformRequest setForce(Boolean val) { this._force = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_force != null) {
      builder.field(FORCE.getPreferredName(), _force);
    }
    builder.endObject();
    return builder;
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
