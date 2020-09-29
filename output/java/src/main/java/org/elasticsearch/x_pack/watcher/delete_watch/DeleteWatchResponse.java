
package org.elasticsearch.x_pack.watcher.delete_watch;

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
import org.elasticsearch.common_abstractions.response.*;

public class DeleteWatchResponse extends ResponseBase<DeleteWatchResponse> implements XContentable<DeleteWatchResponse> {
  
  static final ParseField FOUND = new ParseField("found");
  private Boolean _found;
  public Boolean getFound() { return this._found; }
  public DeleteWatchResponse setFound(Boolean val) { this._found = val; return this; }

  static final ParseField ID = new ParseField("_id");
  private String _id;
  public String getId() { return this._id; }
  public DeleteWatchResponse setId(String val) { this._id = val; return this; }

  static final ParseField VERSION = new ParseField("_version");
  private int _version;
  private boolean _version$isSet;
  public int getVersion() { return this._version; }
  public DeleteWatchResponse setVersion(int val) {
    this._version = val;
    _version$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_found != null) {
      builder.field(FOUND.getPreferredName(), _found);
    }
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_version$isSet) {
      builder.field(VERSION.getPreferredName(), _version);
    }
  }

  @Override
  public DeleteWatchResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteWatchResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteWatchResponse, Void> PARSER =
    new ObjectParser<>(DeleteWatchResponse.class.getName(), false, DeleteWatchResponse::new);

  static {
    PARSER.declareBoolean(DeleteWatchResponse::setFound, FOUND);
    PARSER.declareString(DeleteWatchResponse::setId, ID);
    PARSER.declareInt(DeleteWatchResponse::setVersion, VERSION);
  }

}
