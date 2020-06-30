
package org.elasticsearch.x_pack.machine_learning.delete_datafeed;

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


public class DeleteDatafeedRequest  implements XContentable<DeleteDatafeedRequest> {
  
  static final ParseField FORCE = new ParseField("force");
  private Boolean _force;
  public Boolean getForce() { return this._force; }
  public DeleteDatafeedRequest setForce(Boolean val) { this._force = val; return this; }


  
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
  public DeleteDatafeedRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteDatafeedRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteDatafeedRequest, Void> PARSER =
    new ObjectParser<>(DeleteDatafeedRequest.class.getName(), false, DeleteDatafeedRequest::new);

  static {
    PARSER.declareBoolean(DeleteDatafeedRequest::setForce, FORCE);
  }

}
