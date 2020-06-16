
package org.elasticsearch.indices.index_management.unfreeze_index;

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


public class UnfreezeIndexResponse  implements XContentable<UnfreezeIndexResponse> {
  
  static final ParseField SHARDS_ACKNOWLEDGED = new ParseField("shards_acknowledged");
  private Boolean _shardsAcknowledged;
  public Boolean getShardsAcknowledged() { return this._shardsAcknowledged; }
  public UnfreezeIndexResponse setShardsAcknowledged(Boolean val) { this._shardsAcknowledged = val; return this; }


  
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
  public UnfreezeIndexResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return UnfreezeIndexResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<UnfreezeIndexResponse, Void> PARSER =
    new ObjectParser<>(UnfreezeIndexResponse.class.getName(), false, UnfreezeIndexResponse::new);

  static {
    PARSER.declareBoolean(UnfreezeIndexResponse::setShardsAcknowledged, SHARDS_ACKNOWLEDGED);
  }

}
