
package org.elasticsearch.search.search.profile;

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

public class AggregationBreakdown  implements XContentable<AggregationBreakdown> {
  
  static final ParseField BUILD_AGGREGATION = new ParseField("build_aggregation");
  private long _buildAggregation;
  private boolean _buildAggregation$isSet;
  public long getBuildAggregation() { return this._buildAggregation; }
  public AggregationBreakdown setBuildAggregation(long val) {
    this._buildAggregation = val;
    _buildAggregation$isSet = true;
    return this;
  }

  static final ParseField BUILD_AGGREGATION_COUNT = new ParseField("build_aggregation_count");
  private long _buildAggregationCount;
  private boolean _buildAggregationCount$isSet;
  public long getBuildAggregationCount() { return this._buildAggregationCount; }
  public AggregationBreakdown setBuildAggregationCount(long val) {
    this._buildAggregationCount = val;
    _buildAggregationCount$isSet = true;
    return this;
  }

  static final ParseField COLLECT = new ParseField("collect");
  private long _collect;
  private boolean _collect$isSet;
  public long getCollect() { return this._collect; }
  public AggregationBreakdown setCollect(long val) {
    this._collect = val;
    _collect$isSet = true;
    return this;
  }

  static final ParseField COLLECT_COUNT = new ParseField("collect_count");
  private long _collectCount;
  private boolean _collectCount$isSet;
  public long getCollectCount() { return this._collectCount; }
  public AggregationBreakdown setCollectCount(long val) {
    this._collectCount = val;
    _collectCount$isSet = true;
    return this;
  }

  static final ParseField INITIALIZE = new ParseField("initialize");
  private long _initialize;
  private boolean _initialize$isSet;
  public long getInitialize() { return this._initialize; }
  public AggregationBreakdown setInitialize(long val) {
    this._initialize = val;
    _initialize$isSet = true;
    return this;
  }

  static final ParseField INTIALIZE_COUNT = new ParseField("intialize_count");
  private long _intializeCount;
  private boolean _intializeCount$isSet;
  public long getIntializeCount() { return this._intializeCount; }
  public AggregationBreakdown setIntializeCount(long val) {
    this._intializeCount = val;
    _intializeCount$isSet = true;
    return this;
  }

  static final ParseField REDUCE = new ParseField("reduce");
  private long _reduce;
  private boolean _reduce$isSet;
  public long getReduce() { return this._reduce; }
  public AggregationBreakdown setReduce(long val) {
    this._reduce = val;
    _reduce$isSet = true;
    return this;
  }

  static final ParseField REDUCE_COUNT = new ParseField("reduce_count");
  private long _reduceCount;
  private boolean _reduceCount$isSet;
  public long getReduceCount() { return this._reduceCount; }
  public AggregationBreakdown setReduceCount(long val) {
    this._reduceCount = val;
    _reduceCount$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_buildAggregation$isSet) {
      builder.field(BUILD_AGGREGATION.getPreferredName(), _buildAggregation);
    }
    if (_buildAggregationCount$isSet) {
      builder.field(BUILD_AGGREGATION_COUNT.getPreferredName(), _buildAggregationCount);
    }
    if (_collect$isSet) {
      builder.field(COLLECT.getPreferredName(), _collect);
    }
    if (_collectCount$isSet) {
      builder.field(COLLECT_COUNT.getPreferredName(), _collectCount);
    }
    if (_initialize$isSet) {
      builder.field(INITIALIZE.getPreferredName(), _initialize);
    }
    if (_intializeCount$isSet) {
      builder.field(INTIALIZE_COUNT.getPreferredName(), _intializeCount);
    }
    if (_reduce$isSet) {
      builder.field(REDUCE.getPreferredName(), _reduce);
    }
    if (_reduceCount$isSet) {
      builder.field(REDUCE_COUNT.getPreferredName(), _reduceCount);
    }
  }

  @Override
  public AggregationBreakdown fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AggregationBreakdown.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AggregationBreakdown, Void> PARSER =
    new ObjectParser<>(AggregationBreakdown.class.getName(), false, AggregationBreakdown::new);

  static {
    PARSER.declareLong(AggregationBreakdown::setBuildAggregation, BUILD_AGGREGATION);
    PARSER.declareLong(AggregationBreakdown::setBuildAggregationCount, BUILD_AGGREGATION_COUNT);
    PARSER.declareLong(AggregationBreakdown::setCollect, COLLECT);
    PARSER.declareLong(AggregationBreakdown::setCollectCount, COLLECT_COUNT);
    PARSER.declareLong(AggregationBreakdown::setInitialize, INITIALIZE);
    PARSER.declareLong(AggregationBreakdown::setIntializeCount, INTIALIZE_COUNT);
    PARSER.declareLong(AggregationBreakdown::setReduce, REDUCE);
    PARSER.declareLong(AggregationBreakdown::setReduceCount, REDUCE_COUNT);
  }

}
