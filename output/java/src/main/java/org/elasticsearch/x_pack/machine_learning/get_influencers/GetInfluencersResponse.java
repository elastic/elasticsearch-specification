
package org.elasticsearch.x_pack.machine_learning.get_influencers;

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

public class GetInfluencersResponse  implements XContentable<GetInfluencersResponse> {
  
  static final ParseField COUNT = new ParseField("count");
  private Long _count;
  public Long getCount() { return this._count; }
  public GetInfluencersResponse setCount(Long val) { this._count = val; return this; }


  static final ParseField INFLUENCERS = new ParseField("influencers");
  private List<BucketInfluencer> _influencers;
  public List<BucketInfluencer> getInfluencers() { return this._influencers; }
  public GetInfluencersResponse setInfluencers(List<BucketInfluencer> val) { this._influencers = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_count != null) {
      builder.field(COUNT.getPreferredName(), _count);
    }
    if (_influencers != null) {
      builder.array(INFLUENCERS.getPreferredName(), _influencers);
    }
    builder.endObject();
    return builder;
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
