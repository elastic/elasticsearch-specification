
package org.elasticsearch.x_pack.ilm.get_status;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.x_pack.ilm.get_status.*;
import org.elasticsearch.common_abstractions.response.*;

public class GetIlmStatusResponse extends ResponseBase<GetIlmStatusResponse> implements XContentable<GetIlmStatusResponse> {
  
  static final ParseField OPERATION_MODE = new ParseField("operation_mode");
  private LifecycleOperationMode _operationMode;
  public LifecycleOperationMode getOperationMode() { return this._operationMode; }
  public GetIlmStatusResponse setOperationMode(LifecycleOperationMode val) { this._operationMode = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_operationMode != null) {
      builder.field(OPERATION_MODE.getPreferredName());
      _operationMode.toXContent(builder, params);
    }
  }

  @Override
  public GetIlmStatusResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetIlmStatusResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetIlmStatusResponse, Void> PARSER =
    new ObjectParser<>(GetIlmStatusResponse.class.getName(), false, GetIlmStatusResponse::new);

  static {
    PARSER.declareField(GetIlmStatusResponse::setOperationMode, (p, t) -> LifecycleOperationMode.PARSER.apply(p), OPERATION_MODE, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
