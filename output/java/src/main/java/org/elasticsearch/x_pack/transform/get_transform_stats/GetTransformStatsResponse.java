
package org.elasticsearch.x_pack.transform.get_transform_stats;

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
import org.elasticsearch.x_pack.transform.get_transform_stats.*;

public class GetTransformStatsResponse  implements XContentable<GetTransformStatsResponse> {
  
  static final ParseField COUNT = new ParseField("count");
  private Long _count;
  public Long getCount() { return this._count; }
  public GetTransformStatsResponse setCount(Long val) { this._count = val; return this; }


  static final ParseField TRANSFORMS = new ParseField("transforms");
  private List<TransformStats> _transforms;
  public List<TransformStats> getTransforms() { return this._transforms; }
  public GetTransformStatsResponse setTransforms(List<TransformStats> val) { this._transforms = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_count != null) {
      builder.field(COUNT.getPreferredName(), _count);
    }
    if (_transforms != null) {
      builder.array(TRANSFORMS.getPreferredName(), _transforms);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public GetTransformStatsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetTransformStatsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetTransformStatsResponse, Void> PARSER =
    new ObjectParser<>(GetTransformStatsResponse.class.getName(), false, GetTransformStatsResponse::new);

  static {
    PARSER.declareLong(GetTransformStatsResponse::setCount, COUNT);
    PARSER.declareObjectArray(GetTransformStatsResponse::setTransforms, (p, t) -> TransformStats.PARSER.apply(p, t), TRANSFORMS);
  }

}
