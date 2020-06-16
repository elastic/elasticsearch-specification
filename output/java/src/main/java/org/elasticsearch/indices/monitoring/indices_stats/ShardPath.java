
package org.elasticsearch.indices.monitoring.indices_stats;

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


public class ShardPath  implements XContentable<ShardPath> {
  
  static final ParseField DATA_PATH = new ParseField("data_path");
  private String _dataPath;
  public String getDataPath() { return this._dataPath; }
  public ShardPath setDataPath(String val) { this._dataPath = val; return this; }


  static final ParseField IS_CUSTOM_DATA_PATH = new ParseField("is_custom_data_path");
  private Boolean _isCustomDataPath;
  public Boolean getIsCustomDataPath() { return this._isCustomDataPath; }
  public ShardPath setIsCustomDataPath(Boolean val) { this._isCustomDataPath = val; return this; }


  static final ParseField STATE_PATH = new ParseField("state_path");
  private String _statePath;
  public String getStatePath() { return this._statePath; }
  public ShardPath setStatePath(String val) { this._statePath = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_dataPath != null) {
      builder.field(DATA_PATH.getPreferredName(), _dataPath);
    }
    if (_isCustomDataPath != null) {
      builder.field(IS_CUSTOM_DATA_PATH.getPreferredName(), _isCustomDataPath);
    }
    if (_statePath != null) {
      builder.field(STATE_PATH.getPreferredName(), _statePath);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ShardPath fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ShardPath.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ShardPath, Void> PARSER =
    new ObjectParser<>(ShardPath.class.getName(), false, ShardPath::new);

  static {
    PARSER.declareString(ShardPath::setDataPath, DATA_PATH);
    PARSER.declareBoolean(ShardPath::setIsCustomDataPath, IS_CUSTOM_DATA_PATH);
    PARSER.declareString(ShardPath::setStatePath, STATE_PATH);
  }

}
