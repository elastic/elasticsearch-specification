
package org.elasticsearch.x_pack.machine_learning.get_influencers;

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

public class GetInfluencersResponse extends ResponseBase<GetInfluencersResponse> implements XContentable<GetInfluencersResponse> {
  
  static final ParseField COUNT = new ParseField("count");
  private long _count;
  private boolean _count$isSet;
  public long getCount() { return this._count; }
  public GetInfluencersResponse setCount(long val) {
    this._count = val;
    _count$isSet = true;
    return this;
  }

  static final ParseField INFLUENCERS = new ParseField("influencers");
  private List<BucketInfluencer> _influencers;
  public List<BucketInfluencer> getInfluencers() { return this._influencers; }
  public GetInfluencersResponse setInfluencers(List<BucketInfluencer> val) { this._influencers = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_count$isSet) {
      builder.field(COUNT.getPreferredName(), _count);
    }
    if (_influencers != null) {
      builder.array(INFLUENCERS.getPreferredName(), _influencers);
    }
  }

  @Override
  public GetInfluencersResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetInfluencersResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetInfluencersResponse, Void> PARSER =
    new ObjectParser<>(GetInfluencersResponse.class.getName(), false, GetInfluencersResponse::new);

  static {
    PARSER.declareLong(GetInfluencersResponse::setCount, COUNT);
    PARSER.declareObjectArray(GetInfluencersResponse::setInfluencers, (p, t) -> BucketInfluencer.PARSER.apply(p, t), INFLUENCERS);
  }

}
