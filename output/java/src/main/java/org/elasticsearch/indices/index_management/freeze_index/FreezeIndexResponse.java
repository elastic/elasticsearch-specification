
package org.elasticsearch.indices.index_management.freeze_index;

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


public class FreezeIndexResponse  implements XContentable<FreezeIndexResponse> {
  
  static final ParseField SHARDS_ACKNOWLEDGED = new ParseField("shards_acknowledged");
  private Boolean _shardsAcknowledged;
  public Boolean getShardsAcknowledged() { return this._shardsAcknowledged; }
  public FreezeIndexResponse setShardsAcknowledged(Boolean val) { this._shardsAcknowledged = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_shardsAcknowledged != null) {
      builder.field(SHARDS_ACKNOWLEDGED.getPreferredName(), _shardsAcknowledged);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public FreezeIndexResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FreezeIndexResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FreezeIndexResponse, Void> PARSER =
    new ObjectParser<>(FreezeIndexResponse.class.getName(), false, FreezeIndexResponse::new);

  static {
    PARSER.declareBoolean(FreezeIndexResponse::setShardsAcknowledged, SHARDS_ACKNOWLEDGED);
  }

}
