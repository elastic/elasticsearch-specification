
package org.elasticsearch.x_pack.machine_learning.get_overall_buckets;

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
import org.elasticsearch.x_pack.machine_learning.job.results.*;

public class GetOverallBucketsResponse  implements XContentable<GetOverallBucketsResponse> {
  
  static final ParseField COUNT = new ParseField("count");
  private Long _count;
  public Long getCount() { return this._count; }
  public GetOverallBucketsResponse setCount(Long val) { this._count = val; return this; }


  static final ParseField OVERALL_BUCKETS = new ParseField("overall_buckets");
  private List<OverallBucket> _overallBuckets;
  public List<OverallBucket> getOverallBuckets() { return this._overallBuckets; }
  public GetOverallBucketsResponse setOverallBuckets(List<OverallBucket> val) { this._overallBuckets = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_count != null) {
      builder.field(COUNT.getPreferredName(), _count);
    }
    if (_overallBuckets != null) {
      builder.array(OVERALL_BUCKETS.getPreferredName(), _overallBuckets);
    }
    builder.endObject();
    return builder;
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
