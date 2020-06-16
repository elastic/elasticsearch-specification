
package org.elasticsearch.aggregations.pipeline;

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
import org.elasticsearch.aggregations.pipeline.*;

public class PipelineAggregation  implements XContentable<PipelineAggregation> {
  
  static final ParseField BUCKETS_PATH = new ParseField("buckets_path");
  private BucketsPath _bucketsPath;
  public BucketsPath getBucketsPath() { return this._bucketsPath; }
  public PipelineAggregation setBucketsPath(BucketsPath val) { this._bucketsPath = val; return this; }


  static final ParseField FORMAT = new ParseField("format");
  private String _format;
  public String getFormat() { return this._format; }
  public PipelineAggregation setFormat(String val) { this._format = val; return this; }


  static final ParseField GAP_POLICY = new ParseField("gap_policy");
  private GapPolicy _gapPolicy;
  public GapPolicy getGapPolicy() { return this._gapPolicy; }
  public PipelineAggregation setGapPolicy(GapPolicy val) { this._gapPolicy = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_bucketsPath != null) {
      builder.field(BUCKETS_PATH.getPreferredName());
      _bucketsPath.toXContent(builder, params);
    }
    if (_format != null) {
      builder.field(FORMAT.getPreferredName(), _format);
    }
    if (_gapPolicy != null) {
      builder.field(GAP_POLICY.getPreferredName());
      _gapPolicy.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public PipelineAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PipelineAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PipelineAggregation, Void> PARSER =
    new ObjectParser<>(PipelineAggregation.class.getName(), false, PipelineAggregation::new);

  static {
    PARSER.declareObject(PipelineAggregation::setBucketsPath, (p, t) -> BucketsPath.PARSER.apply(p, t), BUCKETS_PATH);
    PARSER.declareString(PipelineAggregation::setFormat, FORMAT);
    PARSER.declareField(PipelineAggregation::setGapPolicy, (p, t) -> GapPolicy.PARSER.apply(p), GAP_POLICY, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
