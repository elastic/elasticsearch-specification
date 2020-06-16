
package org.elasticsearch.search.search.profile;

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

public class AggregationBreakdown  implements XContentable<AggregationBreakdown> {
  
  static final ParseField BUILD_AGGREGATION = new ParseField("build_aggregation");
  private Long _buildAggregation;
  public Long getBuildAggregation() { return this._buildAggregation; }
  public AggregationBreakdown setBuildAggregation(Long val) { this._buildAggregation = val; return this; }


  static final ParseField BUILD_AGGREGATION_COUNT = new ParseField("build_aggregation_count");
  private Long _buildAggregationCount;
  public Long getBuildAggregationCount() { return this._buildAggregationCount; }
  public AggregationBreakdown setBuildAggregationCount(Long val) { this._buildAggregationCount = val; return this; }


  static final ParseField COLLECT = new ParseField("collect");
  private Long _collect;
  public Long getCollect() { return this._collect; }
  public AggregationBreakdown setCollect(Long val) { this._collect = val; return this; }


  static final ParseField COLLECT_COUNT = new ParseField("collect_count");
  private Long _collectCount;
  public Long getCollectCount() { return this._collectCount; }
  public AggregationBreakdown setCollectCount(Long val) { this._collectCount = val; return this; }


  static final ParseField INITIALIZE = new ParseField("initialize");
  private Long _initialize;
  public Long getInitialize() { return this._initialize; }
  public AggregationBreakdown setInitialize(Long val) { this._initialize = val; return this; }


  static final ParseField INTIALIZE_COUNT = new ParseField("intialize_count");
  private Long _intializeCount;
  public Long getIntializeCount() { return this._intializeCount; }
  public AggregationBreakdown setIntializeCount(Long val) { this._intializeCount = val; return this; }


  static final ParseField REDUCE = new ParseField("reduce");
  private Long _reduce;
  public Long getReduce() { return this._reduce; }
  public AggregationBreakdown setReduce(Long val) { this._reduce = val; return this; }


  static final ParseField REDUCE_COUNT = new ParseField("reduce_count");
  private Long _reduceCount;
  public Long getReduceCount() { return this._reduceCount; }
  public AggregationBreakdown setReduceCount(Long val) { this._reduceCount = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_buildAggregation != null) {
      builder.field(BUILD_AGGREGATION.getPreferredName(), _buildAggregation);
    }
    if (_buildAggregationCount != null) {
      builder.field(BUILD_AGGREGATION_COUNT.getPreferredName(), _buildAggregationCount);
    }
    if (_collect != null) {
      builder.field(COLLECT.getPreferredName(), _collect);
    }
    if (_collectCount != null) {
      builder.field(COLLECT_COUNT.getPreferredName(), _collectCount);
    }
    if (_initialize != null) {
      builder.field(INITIALIZE.getPreferredName(), _initialize);
    }
    if (_intializeCount != null) {
      builder.field(INTIALIZE_COUNT.getPreferredName(), _intializeCount);
    }
    if (_reduce != null) {
      builder.field(REDUCE.getPreferredName(), _reduce);
    }
    if (_reduceCount != null) {
      builder.field(REDUCE_COUNT.getPreferredName(), _reduceCount);
    }
    builder.endObject();
    return builder;
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
