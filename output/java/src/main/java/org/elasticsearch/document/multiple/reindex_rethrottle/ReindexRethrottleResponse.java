
package org.elasticsearch.document.multiple.reindex_rethrottle;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.document.multiple.reindex_rethrottle.*;
import org.elasticsearch.common_abstractions.response.*;

public class ReindexRethrottleResponse extends ResponseBase<ReindexRethrottleResponse> implements XContentable<ReindexRethrottleResponse> {
  
  static final ParseField NODES = new ParseField("nodes");
  private NamedContainer<String, ReindexNode> _nodes;
  public NamedContainer<String, ReindexNode> getNodes() { return this._nodes; }
  public ReindexRethrottleResponse setNodes(NamedContainer<String, ReindexNode> val) { this._nodes = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_nodes != null) {
      builder.field(NODES.getPreferredName());
      _nodes.toXContent(builder, params);
    }
  }

  @Override
  public ReindexRethrottleResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ReindexRethrottleResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ReindexRethrottleResponse, Void> PARSER =
    new ObjectParser<>(ReindexRethrottleResponse.class.getName(), false, ReindexRethrottleResponse::new);

  static {
    PARSER.declareObject(ReindexRethrottleResponse::setNodes, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> ReindexNode.PARSER.apply(pp, null)), NODES);
  }

}
