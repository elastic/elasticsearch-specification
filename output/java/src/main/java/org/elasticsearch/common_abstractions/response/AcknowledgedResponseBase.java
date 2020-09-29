
package org.elasticsearch.common_abstractions.response;

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

public class AcknowledgedResponseBase extends ResponseBase<AcknowledgedResponseBase> implements XContentable<AcknowledgedResponseBase> {
  
  static final ParseField ACKNOWLEDGED = new ParseField("acknowledged");
  private Boolean _acknowledged;
  public Boolean getAcknowledged() { return this._acknowledged; }
  public AcknowledgedResponseBase setAcknowledged(Boolean val) { this._acknowledged = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_acknowledged != null) {
      builder.field(ACKNOWLEDGED.getPreferredName(), _acknowledged);
    }
  }

  @Override
  public AcknowledgedResponseBase fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AcknowledgedResponseBase.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AcknowledgedResponseBase, Void> PARSER =
    new ObjectParser<>(AcknowledgedResponseBase.class.getName(), false, AcknowledgedResponseBase::new);

  static {
    PARSER.declareBoolean(AcknowledgedResponseBase::setAcknowledged, ACKNOWLEDGED);
  }

}
