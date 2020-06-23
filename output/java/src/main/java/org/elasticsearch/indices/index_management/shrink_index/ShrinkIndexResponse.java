
package org.elasticsearch.indices.index_management.shrink_index;

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


public class ShrinkIndexResponse  implements XContentable<ShrinkIndexResponse> {
  
  static final ParseField SHARDS_ACKNOWLEDGED = new ParseField("shards_acknowledged");
  private Boolean _shardsAcknowledged;
  public Boolean getShardsAcknowledged() { return this._shardsAcknowledged; }
  public ShrinkIndexResponse setShardsAcknowledged(Boolean val) { this._shardsAcknowledged = val; return this; }


  
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
  public ShrinkIndexResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ShrinkIndexResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ShrinkIndexResponse, Void> PARSER =
    new ObjectParser<>(ShrinkIndexResponse.class.getName(), false, ShrinkIndexResponse::new);

  static {
    PARSER.declareBoolean(ShrinkIndexResponse::setShardsAcknowledged, SHARDS_ACKNOWLEDGED);
  }

}
