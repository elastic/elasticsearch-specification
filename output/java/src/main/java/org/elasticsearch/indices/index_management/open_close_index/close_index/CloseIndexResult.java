
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

public class CloseIndexResult  implements XContentable<CloseIndexResult> {
  
  static final ParseField CLOSED = new ParseField("closed");
  private Boolean _closed;
  public Boolean getClosed() { return this._closed; }
  public CloseIndexResult setClosed(Boolean val) { this._closed = val; return this; }


  static final ParseField SHARDS = new ParseField("shards");
  private NamedContainer<String, CloseShardResult> _shards;
  public NamedContainer<String, CloseShardResult> getShards() { return this._shards; }
  public CloseIndexResult setShards(NamedContainer<String, CloseShardResult> val) { this._shards = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_closed != null) {
      builder.field(CLOSED.getPreferredName(), _closed);
    }
    if (_shards != null) {
      builder.field(SHARDS.getPreferredName());
      _shards.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CloseIndexResult fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CloseIndexResult.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CloseIndexResult, Void> PARSER =
    new ObjectParser<>(CloseIndexResult.class.getName(), false, CloseIndexResult::new);

  static {
    PARSER.declareBoolean(CloseIndexResult::setClosed, CLOSED);
    PARSER.declareObject(CloseIndexResult::setShards, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> CloseShardResult.PARSER.apply(pp, null)), SHARDS);
  }

}
