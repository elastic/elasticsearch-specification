
package org.elasticsearch.indices.index_management.unfreeze_index;

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

public class UnfreezeIndexResponse extends AcknowledgedResponseBase implements XContentable<UnfreezeIndexResponse> {
  
  static final ParseField SHARDS_ACKNOWLEDGED = new ParseField("shards_acknowledged");
  private Boolean _shardsAcknowledged;
  public Boolean getShardsAcknowledged() { return this._shardsAcknowledged; }
  public UnfreezeIndexResponse setShardsAcknowledged(Boolean val) { this._shardsAcknowledged = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_shardsAcknowledged != null) {
      builder.field(SHARDS_ACKNOWLEDGED.getPreferredName(), _shardsAcknowledged);
    }
  }

  @Override
  public UnfreezeIndexResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return UnfreezeIndexResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<UnfreezeIndexResponse, Void> PARSER =
    new ObjectParser<>(UnfreezeIndexResponse.class.getName(), false, UnfreezeIndexResponse::new);

  static {
    PARSER.declareBoolean(UnfreezeIndexResponse::setShardsAcknowledged, SHARDS_ACKNOWLEDGED);
  }

}
