
package org.elasticsearch.indices.index_management.clone_index;

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


public class CloneIndexResponse  implements XContentable<CloneIndexResponse> {
  
  static final ParseField SHARDS_ACKNOWLEDGED = new ParseField("shards_acknowledged");
  private Boolean _shardsAcknowledged;
  public Boolean getShardsAcknowledged() { return this._shardsAcknowledged; }
  public CloneIndexResponse setShardsAcknowledged(Boolean val) { this._shardsAcknowledged = val; return this; }


  static final ParseField INDEX = new ParseField("index");
  private String _index;
  public String getIndex() { return this._index; }
  public CloneIndexResponse setIndex(String val) { this._index = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_shardsAcknowledged != null) {
      builder.field(SHARDS_ACKNOWLEDGED.getPreferredName(), _shardsAcknowledged);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CloneIndexResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CloneIndexResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CloneIndexResponse, Void> PARSER =
    new ObjectParser<>(CloneIndexResponse.class.getName(), false, CloneIndexResponse::new);

  static {
    PARSER.declareBoolean(CloneIndexResponse::setShardsAcknowledged, SHARDS_ACKNOWLEDGED);
    PARSER.declareString(CloneIndexResponse::setIndex, INDEX);
  }

}
