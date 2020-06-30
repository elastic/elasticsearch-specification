
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
import org.elasticsearch.internal.*;

public class SearchShard  implements XContentable<SearchShard> {
  
  static final ParseField INDEX = new ParseField("index");
  private String _index;
  public String getIndex() { return this._index; }
  public SearchShard setIndex(String val) { this._index = val; return this; }


  static final ParseField NODE = new ParseField("node");
  private String _node;
  public String getNode() { return this._node; }
  public SearchShard setNode(String val) { this._node = val; return this; }


  static final ParseField PRIMARY = new ParseField("primary");
  private Boolean _primary;
  public Boolean getPrimary() { return this._primary; }
  public SearchShard setPrimary(Boolean val) { this._primary = val; return this; }


  static final ParseField RELOCATING_NODE = new ParseField("relocating_node");
  private String _relocatingNode;
  public String getRelocatingNode() { return this._relocatingNode; }
  public SearchShard setRelocatingNode(String val) { this._relocatingNode = val; return this; }


  static final ParseField SHARD = new ParseField("shard");
  private Integer _shard;
  public Integer getShard() { return this._shard; }
  public SearchShard setShard(Integer val) { this._shard = val; return this; }


  static final ParseField STATE = new ParseField("state");
  private String _state;
  public String getState() { return this._state; }
  public SearchShard setState(String val) { this._state = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    if (_node != null) {
      builder.field(NODE.getPreferredName(), _node);
    }
    if (_primary != null) {
      builder.field(PRIMARY.getPreferredName(), _primary);
    }
    if (_relocatingNode != null) {
      builder.field(RELOCATING_NODE.getPreferredName(), _relocatingNode);
    }
    if (_shard != null) {
      builder.field(SHARD.getPreferredName(), _shard);
    }
    if (_state != null) {
      builder.field(STATE.getPreferredName(), _state);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SearchShard fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SearchShard.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SearchShard, Void> PARSER =
    new ObjectParser<>(SearchShard.class.getName(), false, SearchShard::new);

  static {
    PARSER.declareString(SearchShard::setIndex, INDEX);
    PARSER.declareString(SearchShard::setNode, NODE);
    PARSER.declareBoolean(SearchShard::setPrimary, PRIMARY);
    PARSER.declareString(SearchShard::setRelocatingNode, RELOCATING_NODE);
    PARSER.declareInt(SearchShard::setShard, SHARD);
    PARSER.declareString(SearchShard::setState, STATE);
  }

}
