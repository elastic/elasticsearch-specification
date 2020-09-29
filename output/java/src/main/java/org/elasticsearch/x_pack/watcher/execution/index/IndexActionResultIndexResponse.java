
package org.elasticsearch.x_pack.watcher.execution.index;

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
import org.elasticsearch.document.*;

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
  private String _index;
  public String getIndex() { return this._index; }
  public IndexActionResultIndexResponse setIndex(String val) { this._index = val; return this; }

  static final ParseField RESULT = new ParseField("result");
  private Result _result;
  public Result getResult() { return this._result; }
  public IndexActionResultIndexResponse setResult(Result val) { this._result = val; return this; }

  static final ParseField VERSION = new ParseField("version");
  private int _version;
  private boolean _version$isSet;
  public int getVersion() { return this._version; }
  public IndexActionResultIndexResponse setVersion(int val) {
    this._version = val;
    _version$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_created != null) {
      builder.field(CREATED.getPreferredName(), _created);
    }
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    if (_result != null) {
      builder.field(RESULT.getPreferredName());
      _result.toXContent(builder, params);
    }
    if (_version$isSet) {
      builder.field(VERSION.getPreferredName(), _version);
    }
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
    PARSER.declareString(IndexActionResultIndexResponse::setIndex, INDEX);
    PARSER.declareField(IndexActionResultIndexResponse::setResult, (p, t) -> Result.PARSER.apply(p), RESULT, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareInt(IndexActionResultIndexResponse::setVersion, VERSION);
  }

}
