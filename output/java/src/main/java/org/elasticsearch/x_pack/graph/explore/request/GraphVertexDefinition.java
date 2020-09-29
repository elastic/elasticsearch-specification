
package org.elasticsearch.x_pack.graph.explore.request;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.x_pack.graph.explore.request.*;

public class GraphVertexDefinition  implements XContentable<GraphVertexDefinition> {
  
  static final ParseField EXCLUDE = new ParseField("exclude");
  private List<String> _exclude;
  public List<String> getExclude() { return this._exclude; }
  public GraphVertexDefinition setExclude(List<String> val) { this._exclude = val; return this; }

  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public GraphVertexDefinition setField(String val) { this._field = val; return this; }

  static final ParseField INCLUDE = new ParseField("include");
  private List<GraphVertexInclude> _include;
  public List<GraphVertexInclude> getInclude() { return this._include; }
  public GraphVertexDefinition setInclude(List<GraphVertexInclude> val) { this._include = val; return this; }

  static final ParseField MIN_DOC_COUNT = new ParseField("min_doc_count");
  private long _minDocCount;
  private boolean _minDocCount$isSet;
  public long getMinDocCount() { return this._minDocCount; }
  public GraphVertexDefinition setMinDocCount(long val) {
    this._minDocCount = val;
    _minDocCount$isSet = true;
    return this;
  }

  static final ParseField SHARD_MIN_DOC_COUNT = new ParseField("shard_min_doc_count");
  private long _shardMinDocCount;
  private boolean _shardMinDocCount$isSet;
  public long getShardMinDocCount() { return this._shardMinDocCount; }
  public GraphVertexDefinition setShardMinDocCount(long val) {
    this._shardMinDocCount = val;
    _shardMinDocCount$isSet = true;
    return this;
  }

  static final ParseField SIZE = new ParseField("size");
  private int _size;
  private boolean _size$isSet;
  public int getSize() { return this._size; }
  public GraphVertexDefinition setSize(int val) {
    this._size = val;
    _size$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_exclude != null) {
      builder.array(EXCLUDE.getPreferredName(), _exclude);
    }
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_include != null) {
      builder.array(INCLUDE.getPreferredName(), _include);
    }
    if (_minDocCount$isSet) {
      builder.field(MIN_DOC_COUNT.getPreferredName(), _minDocCount);
    }
    if (_shardMinDocCount$isSet) {
      builder.field(SHARD_MIN_DOC_COUNT.getPreferredName(), _shardMinDocCount);
    }
    if (_size$isSet) {
      builder.field(SIZE.getPreferredName(), _size);
    }
  }

  @Override
  public GraphVertexDefinition fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GraphVertexDefinition.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GraphVertexDefinition, Void> PARSER =
    new ObjectParser<>(GraphVertexDefinition.class.getName(), false, GraphVertexDefinition::new);

  static {
    PARSER.declareStringArray(GraphVertexDefinition::setExclude, EXCLUDE);
    PARSER.declareString(GraphVertexDefinition::setField, FIELD);
    PARSER.declareObjectArray(GraphVertexDefinition::setInclude, (p, t) -> GraphVertexInclude.PARSER.apply(p, t), INCLUDE);
    PARSER.declareLong(GraphVertexDefinition::setMinDocCount, MIN_DOC_COUNT);
    PARSER.declareLong(GraphVertexDefinition::setShardMinDocCount, SHARD_MIN_DOC_COUNT);
    PARSER.declareInt(GraphVertexDefinition::setSize, SIZE);
  }

}
