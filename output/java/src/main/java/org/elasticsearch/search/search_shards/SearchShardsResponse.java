
package org.elasticsearch.search.search_shards;

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
import org.elasticsearch.search.search_shards.*;

public class SearchShardsResponse  implements XContentable<SearchShardsResponse> {
  
  static final ParseField NODES = new ParseField("nodes");
  private NamedContainer<String, SearchNode> _nodes;
  public NamedContainer<String, SearchNode> getNodes() { return this._nodes; }
  public SearchShardsResponse setNodes(NamedContainer<String, SearchNode> val) { this._nodes = val; return this; }


  static final ParseField SHARDS = new ParseField("shards");
  private List<List<SearchShard>> _shards;
  public List<List<SearchShard>> getShards() { return this._shards; }
  public SearchShardsResponse setShards(List<List<SearchShard>> val) { this._shards = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_nodes != null) {
      builder.field(NODES.getPreferredName());
      _nodes.toXContent(builder, params);
    }
    if (_shards != null) {
      builder.array(SHARDS.getPreferredName(), _shards);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SearchShardsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SearchShardsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SearchShardsResponse, Void> PARSER =
    new ObjectParser<>(SearchShardsResponse.class.getName(), false, SearchShardsResponse::new);

  static {
    PARSER.declareObject(SearchShardsResponse::setNodes, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> SearchNode.PARSER.apply(pp, null)), NODES);
    PARSER.declareObjectArray(SearchShardsResponse::setShards, (p, t) -> null /* TODO List<SearchShard> */, SHARDS);
  }

}
