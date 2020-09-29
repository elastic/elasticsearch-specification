
package org.elasticsearch.x_pack.slm;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.internal.*;

public class SnapshotRetentionConfiguration  implements XContentable<SnapshotRetentionConfiguration> {
  
  static final ParseField EXPIRE_AFTER = new ParseField("expire_after");
  private String _expireAfter;
  public String getExpireAfter() { return this._expireAfter; }
  public SnapshotRetentionConfiguration setExpireAfter(String val) { this._expireAfter = val; return this; }

  static final ParseField MAX_COUNT = new ParseField("max_count");
  private int _maxCount;
  private boolean _maxCount$isSet;
  public int getMaxCount() { return this._maxCount; }
  public SnapshotRetentionConfiguration setMaxCount(int val) {
    this._maxCount = val;
    _maxCount$isSet = true;
    return this;
  }

  static final ParseField MIN_COUNT = new ParseField("min_count");
  private int _minCount;
  private boolean _minCount$isSet;
  public int getMinCount() { return this._minCount; }
  public SnapshotRetentionConfiguration setMinCount(int val) {
    this._minCount = val;
    _minCount$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_expireAfter != null) {
      builder.field(EXPIRE_AFTER.getPreferredName(), _expireAfter);
    }
    if (_maxCount$isSet) {
      builder.field(MAX_COUNT.getPreferredName(), _maxCount);
    }
    if (_minCount$isSet) {
      builder.field(MIN_COUNT.getPreferredName(), _minCount);
    }
  }

  @Override
  public SnapshotRetentionConfiguration fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SnapshotRetentionConfiguration.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SnapshotRetentionConfiguration, Void> PARSER =
    new ObjectParser<>(SnapshotRetentionConfiguration.class.getName(), false, SnapshotRetentionConfiguration::new);

  static {
    PARSER.declareString(SnapshotRetentionConfiguration::setExpireAfter, EXPIRE_AFTER);
    PARSER.declareInt(SnapshotRetentionConfiguration::setMaxCount, MAX_COUNT);
    PARSER.declareInt(SnapshotRetentionConfiguration::setMinCount, MIN_COUNT);
  }

}
