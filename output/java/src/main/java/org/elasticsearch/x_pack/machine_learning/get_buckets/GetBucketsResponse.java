
package org.elasticsearch.x_pack.machine_learning.get_buckets;

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
import org.elasticsearch.x_pack.machine_learning.job.results.*;
import org.elasticsearch.internal.*;

public class GetBucketsResponse  implements XContentable<GetBucketsResponse> {
  
  static final ParseField BUCKETS = new ParseField("buckets");
  private List<Bucket> _buckets;
  public List<Bucket> getBuckets() { return this._buckets; }
  public GetBucketsResponse setBuckets(List<Bucket> val) { this._buckets = val; return this; }


  static final ParseField COUNT = new ParseField("count");
  private Long _count;
  public Long getCount() { return this._count; }
  public GetBucketsResponse setCount(Long val) { this._count = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_buckets != null) {
      builder.array(BUCKETS.getPreferredName(), _buckets);
    }
    if (_count != null) {
      builder.field(COUNT.getPreferredName(), _count);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public GetBucketsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetBucketsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetBucketsResponse, Void> PARSER =
    new ObjectParser<>(GetBucketsResponse.class.getName(), false, GetBucketsResponse::new);

  static {
    PARSER.declareObjectArray(GetBucketsResponse::setBuckets, (p, t) -> Bucket.PARSER.apply(p, t), BUCKETS);
    PARSER.declareLong(GetBucketsResponse::setCount, COUNT);
  }

}
