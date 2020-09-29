
package org.elasticsearch.search.search.profile;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.search.search.profile.*;
import org.elasticsearch.internal.*;

public class Collector  implements XContentable<Collector> {
  
  static final ParseField CHILDREN = new ParseField("children");
  private List<Collector> _children;
  public List<Collector> getChildren() { return this._children; }
  public Collector setChildren(List<Collector> val) { this._children = val; return this; }

  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public Collector setName(String val) { this._name = val; return this; }

  static final ParseField REASON = new ParseField("reason");
  private String _reason;
  public String getReason() { return this._reason; }
  public Collector setReason(String val) { this._reason = val; return this; }

  static final ParseField TIME_IN_NANOS = new ParseField("time_in_nanos");
  private long _timeInNanos;
  private boolean _timeInNanos$isSet;
  public long getTimeInNanos() { return this._timeInNanos; }
  public Collector setTimeInNanos(long val) {
    this._timeInNanos = val;
    _timeInNanos$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_children != null) {
      builder.array(CHILDREN.getPreferredName(), _children);
    }
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
    if (_reason != null) {
      builder.field(REASON.getPreferredName(), _reason);
    }
    if (_timeInNanos$isSet) {
      builder.field(TIME_IN_NANOS.getPreferredName(), _timeInNanos);
    }
  }

  @Override
  public Collector fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Collector.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Collector, Void> PARSER =
    new ObjectParser<>(Collector.class.getName(), false, Collector::new);

  static {
    PARSER.declareObjectArray(Collector::setChildren, (p, t) -> Collector.PARSER.apply(p, t), CHILDREN);
    PARSER.declareString(Collector::setName, NAME);
    PARSER.declareString(Collector::setReason, REASON);
    PARSER.declareLong(Collector::setTimeInNanos, TIME_IN_NANOS);
  }

}
