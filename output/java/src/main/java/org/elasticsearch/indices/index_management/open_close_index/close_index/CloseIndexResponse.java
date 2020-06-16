
package org.elasticsearch.indices.index_management.open_close_index.close_index;

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
import org.elasticsearch.indices.index_management.open_close_index.close_index.*;

public class CloseIndexResponse  implements XContentable<CloseIndexResponse> {
  
  static final ParseField INDICES = new ParseField("indices");
  private NamedContainer<String, CloseIndexResult> _indices;
  public NamedContainer<String, CloseIndexResult> getIndices() { return this._indices; }
  public CloseIndexResponse setIndices(NamedContainer<String, CloseIndexResult> val) { this._indices = val; return this; }


  static final ParseField SHARDS_ACKNOWLEDGED = new ParseField("shards_acknowledged");
  private Boolean _shardsAcknowledged;
  public Boolean getShardsAcknowledged() { return this._shardsAcknowledged; }
  public CloseIndexResponse setShardsAcknowledged(Boolean val) { this._shardsAcknowledged = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_indices != null) {
      builder.field(INDICES.getPreferredName());
      _indices.toXContent(builder, params);
    }
    if (_shardsAcknowledged != null) {
      builder.field(SHARDS_ACKNOWLEDGED.getPreferredName(), _shardsAcknowledged);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CloseIndexResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CloseIndexResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CloseIndexResponse, Void> PARSER =
    new ObjectParser<>(CloseIndexResponse.class.getName(), false, CloseIndexResponse::new);

  static {
    PARSER.declareObject(CloseIndexResponse::setIndices, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> CloseIndexResult.PARSER.apply(pp, null)), INDICES);
    PARSER.declareBoolean(CloseIndexResponse::setShardsAcknowledged, SHARDS_ACKNOWLEDGED);
  }

}
