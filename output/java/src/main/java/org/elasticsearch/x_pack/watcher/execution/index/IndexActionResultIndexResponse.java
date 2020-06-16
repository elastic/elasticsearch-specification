
package org.elasticsearch.x_pack.watcher.execution.index;

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
import org.elasticsearch.common_abstractions.infer.index_name.*;
import org.elasticsearch.document.*;
import org.elasticsearch.internal.*;

public class IndexActionResultIndexResponse  implements XContentable<IndexActionResultIndexResponse> {
  
  static final ParseField CREATED = new ParseField("created");
  private Boolean _created;
  public Boolean getCreated() { return this._created; }
  public IndexActionResultIndexResponse setCreated(Boolean val) { this._created = val; return this; }


  static final ParseField ID = new ParseField("id");
  private String _id;
  public String getId() { return this._id; }
  public IndexActionResultIndexResponse setId(String val) { this._id = val; return this; }


  static final ParseField INDEX = new ParseField("index");
  private IndexName _index;
  public IndexName getIndex() { return this._index; }
  public IndexActionResultIndexResponse setIndex(IndexName val) { this._index = val; return this; }


  static final ParseField RESULT = new ParseField("result");
  private Result _result;
  public Result getResult() { return this._result; }
  public IndexActionResultIndexResponse setResult(Result val) { this._result = val; return this; }


  static final ParseField VERSION = new ParseField("version");
  private Integer _version;
  public Integer getVersion() { return this._version; }
  public IndexActionResultIndexResponse setVersion(Integer val) { this._version = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_created != null) {
      builder.field(CREATED.getPreferredName(), _created);
    }
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName());
      _index.toXContent(builder, params);
    }
    if (_result != null) {
      builder.field(RESULT.getPreferredName());
      _result.toXContent(builder, params);
    }
    if (_version != null) {
      builder.field(VERSION.getPreferredName(), _version);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public IndexActionResultIndexResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IndexActionResultIndexResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IndexActionResultIndexResponse, Void> PARSER =
    new ObjectParser<>(IndexActionResultIndexResponse.class.getName(), false, IndexActionResultIndexResponse::new);

  static {
    PARSER.declareBoolean(IndexActionResultIndexResponse::setCreated, CREATED);
    PARSER.declareString(IndexActionResultIndexResponse::setId, ID);
    PARSER.declareObject(IndexActionResultIndexResponse::setIndex, (p, t) -> IndexName.createFrom(p), INDEX);
    PARSER.declareField(IndexActionResultIndexResponse::setResult, (p, t) -> Result.PARSER.apply(p), RESULT, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareInt(IndexActionResultIndexResponse::setVersion, VERSION);
  }

}
