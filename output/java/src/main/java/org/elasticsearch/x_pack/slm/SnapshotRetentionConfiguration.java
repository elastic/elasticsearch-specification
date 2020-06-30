
package org.elasticsearch.x_pack.slm;

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
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.internal.*;

public class SnapshotRetentionConfiguration  implements XContentable<SnapshotRetentionConfiguration> {
  
  static final ParseField EXPIRE_AFTER = new ParseField("expire_after");
  private Time _expireAfter;
  public Time getExpireAfter() { return this._expireAfter; }
  public SnapshotRetentionConfiguration setExpireAfter(Time val) { this._expireAfter = val; return this; }


  static final ParseField MIN_COUNT = new ParseField("min_count");
  private Integer _minCount;
  public Integer getMinCount() { return this._minCount; }
  public SnapshotRetentionConfiguration setMinCount(Integer val) { this._minCount = val; return this; }


  static final ParseField MAX_COUNT = new ParseField("max_count");
  private Integer _maxCount;
  public Integer getMaxCount() { return this._maxCount; }
  public SnapshotRetentionConfiguration setMaxCount(Integer val) { this._maxCount = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_expireAfter != null) {
      builder.field(EXPIRE_AFTER.getPreferredName());
      _expireAfter.toXContent(builder, params);
    }
    if (_minCount != null) {
      builder.field(MIN_COUNT.getPreferredName(), _minCount);
    }
    if (_maxCount != null) {
      builder.field(MAX_COUNT.getPreferredName(), _maxCount);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SnapshotRetentionConfiguration fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SnapshotRetentionConfiguration.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SnapshotRetentionConfiguration, Void> PARSER =
    new ObjectParser<>(SnapshotRetentionConfiguration.class.getName(), false, SnapshotRetentionConfiguration::new);

  static {
    PARSER.declareObject(SnapshotRetentionConfiguration::setExpireAfter, (p, t) -> Time.PARSER.apply(p, t), EXPIRE_AFTER);
    PARSER.declareInt(SnapshotRetentionConfiguration::setMinCount, MIN_COUNT);
    PARSER.declareInt(SnapshotRetentionConfiguration::setMaxCount, MAX_COUNT);
  }

}
