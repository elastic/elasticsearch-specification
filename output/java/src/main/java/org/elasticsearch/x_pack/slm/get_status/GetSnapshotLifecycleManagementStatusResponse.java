
package org.elasticsearch.x_pack.slm.get_status;

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
import org.elasticsearch.x_pack.ilm.get_status.*;

public class GetSnapshotLifecycleManagementStatusResponse  implements XContentable<GetSnapshotLifecycleManagementStatusResponse> {
  
  static final ParseField OPERATION_MODE = new ParseField("operation_mode");
  private LifecycleOperationMode _operationMode;
  public LifecycleOperationMode getOperationMode() { return this._operationMode; }
  public GetSnapshotLifecycleManagementStatusResponse setOperationMode(LifecycleOperationMode val) { this._operationMode = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_operationMode != null) {
      builder.field(OPERATION_MODE.getPreferredName());
      _operationMode.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public GetSnapshotLifecycleManagementStatusResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetSnapshotLifecycleManagementStatusResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetSnapshotLifecycleManagementStatusResponse, Void> PARSER =
    new ObjectParser<>(GetSnapshotLifecycleManagementStatusResponse.class.getName(), false, GetSnapshotLifecycleManagementStatusResponse::new);

  static {
    PARSER.declareField(GetSnapshotLifecycleManagementStatusResponse::setOperationMode, (p, t) -> LifecycleOperationMode.PARSER.apply(p), OPERATION_MODE, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
