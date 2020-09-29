
package org.elasticsearch.x_pack.machine_learning.machine_learning_info;

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

public class Datafeeds  implements XContentable<Datafeeds> {
  
  static final ParseField SCROLL_SIZE = new ParseField("scroll_size");
  private int _scrollSize;
  private boolean _scrollSize$isSet;
  public int getScrollSize() { return this._scrollSize; }
  public Datafeeds setScrollSize(int val) {
    this._scrollSize = val;
    _scrollSize$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_scrollSize$isSet) {
      builder.field(SCROLL_SIZE.getPreferredName(), _scrollSize);
    }
  }

  @Override
  public Datafeeds fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Datafeeds.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Datafeeds, Void> PARSER =
    new ObjectParser<>(Datafeeds.class.getName(), false, Datafeeds::new);

  static {
    PARSER.declareInt(Datafeeds::setScrollSize, SCROLL_SIZE);
  }

}
