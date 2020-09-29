
package org.elasticsearch.x_pack.machine_learning.get_buckets;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.x_pack.machine_learning.job.results.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common_abstractions.response.*;

public class GetBucketsResponse extends ResponseBase<GetBucketsResponse> implements XContentable<GetBucketsResponse> {
  
  static final ParseField BUCKETS = new ParseField("buckets");
  private List<Bucket> _buckets;
  public List<Bucket> getBuckets() { return this._buckets; }
  public GetBucketsResponse setBuckets(List<Bucket> val) { this._buckets = val; return this; }

  static final ParseField COUNT = new ParseField("count");
  private long _count;
  private boolean _count$isSet;
  public long getCount() { return this._count; }
  public GetBucketsResponse setCount(long val) {
    this._count = val;
    _count$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_buckets != null) {
      builder.array(BUCKETS.getPreferredName(), _buckets);
    }
    if (_count$isSet) {
      builder.field(COUNT.getPreferredName(), _count);
    }
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
