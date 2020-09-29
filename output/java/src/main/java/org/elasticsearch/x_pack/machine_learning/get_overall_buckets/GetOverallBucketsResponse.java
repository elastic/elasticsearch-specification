
package org.elasticsearch.x_pack.machine_learning.get_overall_buckets;

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
import org.elasticsearch.x_pack.machine_learning.job.results.*;
import org.elasticsearch.common_abstractions.response.*;

public class GetOverallBucketsResponse extends ResponseBase<GetOverallBucketsResponse> implements XContentable<GetOverallBucketsResponse> {
  
  static final ParseField COUNT = new ParseField("count");
  private long _count;
  private boolean _count$isSet;
  public long getCount() { return this._count; }
  public GetOverallBucketsResponse setCount(long val) {
    this._count = val;
    _count$isSet = true;
    return this;
  }

  static final ParseField OVERALL_BUCKETS = new ParseField("overall_buckets");
  private List<OverallBucket> _overallBuckets;
  public List<OverallBucket> getOverallBuckets() { return this._overallBuckets; }
  public GetOverallBucketsResponse setOverallBuckets(List<OverallBucket> val) { this._overallBuckets = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_count$isSet) {
      builder.field(COUNT.getPreferredName(), _count);
    }
    if (_overallBuckets != null) {
      builder.array(OVERALL_BUCKETS.getPreferredName(), _overallBuckets);
    }
  }

  @Override
  public GetOverallBucketsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetOverallBucketsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetOverallBucketsResponse, Void> PARSER =
    new ObjectParser<>(GetOverallBucketsResponse.class.getName(), false, GetOverallBucketsResponse::new);

  static {
    PARSER.declareLong(GetOverallBucketsResponse::setCount, COUNT);
    PARSER.declareObjectArray(GetOverallBucketsResponse::setOverallBuckets, (p, t) -> OverallBucket.PARSER.apply(p, t), OVERALL_BUCKETS);
  }

}
