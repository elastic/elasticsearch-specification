
package org.elasticsearch.x_pack.transform;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.x_pack.transform.*;

public class TransformSyncContainer  implements XContentable<TransformSyncContainer> {
  
  static final ParseField TIME = new ParseField("time");
  private TransformTimeSync _time;
  public TransformTimeSync getTime() { return this._time; }
  public TransformSyncContainer setTime(TransformTimeSync val) { this._time = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_time != null) {
      builder.field(TIME.getPreferredName());
      _time.toXContent(builder, params);
    }
  }

  @Override
  public TransformSyncContainer fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TransformSyncContainer.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TransformSyncContainer, Void> PARSER =
    new ObjectParser<>(TransformSyncContainer.class.getName(), false, TransformSyncContainer::new);

  static {
    PARSER.declareObject(TransformSyncContainer::setTime, (p, t) -> TransformTimeSync.PARSER.apply(p, t), TIME);
  }

}
