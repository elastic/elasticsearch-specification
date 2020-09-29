
package org.elasticsearch.document.multiple.reindex_on_server;

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
import org.elasticsearch.common.*;
import org.elasticsearch.document.multiple.reindex_on_server.*;

public class ReindexDestination  implements XContentable<ReindexDestination> {
  
  static final ParseField INDEX = new ParseField("index");
  private String _index;
  public String getIndex() { return this._index; }
  public ReindexDestination setIndex(String val) { this._index = val; return this; }

  static final ParseField OP_TYPE = new ParseField("op_type");
  private OpType _opType;
  public OpType getOpType() { return this._opType; }
  public ReindexDestination setOpType(OpType val) { this._opType = val; return this; }

  static final ParseField PIPELINE = new ParseField("pipeline");
  private String _pipeline;
  public String getPipeline() { return this._pipeline; }
  public ReindexDestination setPipeline(String val) { this._pipeline = val; return this; }

  static final ParseField ROUTING = new ParseField("routing");
  private ReindexRouting _routing;
  public ReindexRouting getRouting() { return this._routing; }
  public ReindexDestination setRouting(ReindexRouting val) { this._routing = val; return this; }

  static final ParseField VERSION_TYPE = new ParseField("version_type");
  private VersionType _versionType;
  public VersionType getVersionType() { return this._versionType; }
  public ReindexDestination setVersionType(VersionType val) { this._versionType = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    if (_opType != null) {
      builder.field(OP_TYPE.getPreferredName());
      _opType.toXContent(builder, params);
    }
    if (_pipeline != null) {
      builder.field(PIPELINE.getPreferredName(), _pipeline);
    }
    if (_routing != null) {
      builder.field(ROUTING.getPreferredName());
      _routing.toXContent(builder, params);
    }
    if (_versionType != null) {
      builder.field(VERSION_TYPE.getPreferredName());
      _versionType.toXContent(builder, params);
    }
  }

  @Override
  public ReindexDestination fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ReindexDestination.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ReindexDestination, Void> PARSER =
    new ObjectParser<>(ReindexDestination.class.getName(), false, ReindexDestination::new);

  static {
    PARSER.declareString(ReindexDestination::setIndex, INDEX);
    PARSER.declareField(ReindexDestination::setOpType, (p, t) -> OpType.PARSER.apply(p), OP_TYPE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(ReindexDestination::setPipeline, PIPELINE);
    PARSER.declareObject(ReindexDestination::setRouting, (p, t) -> ReindexRouting.PARSER.apply(p, t), ROUTING);
    PARSER.declareField(ReindexDestination::setVersionType, (p, t) -> VersionType.PARSER.apply(p), VERSION_TYPE, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
