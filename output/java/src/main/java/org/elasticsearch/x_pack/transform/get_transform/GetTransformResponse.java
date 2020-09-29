
package org.elasticsearch.x_pack.transform.get_transform;

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
import org.elasticsearch.x_pack.watcher.transform.*;
import org.elasticsearch.common_abstractions.response.*;

public class GetTransformResponse extends ResponseBase<GetTransformResponse> implements XContentable<GetTransformResponse> {
  
  static final ParseField COUNT = new ParseField("count");
  private long _count;
  private boolean _count$isSet;
  public long getCount() { return this._count; }
  public GetTransformResponse setCount(long val) {
    this._count = val;
    _count$isSet = true;
    return this;
  }

  static final ParseField TRANSFORMS = new ParseField("transforms");
  private List<Transform> _transforms;
  public List<Transform> getTransforms() { return this._transforms; }
  public GetTransformResponse setTransforms(List<Transform> val) { this._transforms = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_count$isSet) {
      builder.field(COUNT.getPreferredName(), _count);
    }
    if (_transforms != null) {
      builder.array(TRANSFORMS.getPreferredName(), _transforms);
    }
  }

  @Override
  public GetTransformResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetTransformResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetTransformResponse, Void> PARSER =
    new ObjectParser<>(GetTransformResponse.class.getName(), false, GetTransformResponse::new);

  static {
    PARSER.declareLong(GetTransformResponse::setCount, COUNT);
    PARSER.declareObjectArray(GetTransformResponse::setTransforms, (p, t) -> Transform.PARSER.apply(p, t), TRANSFORMS);
  }

}
