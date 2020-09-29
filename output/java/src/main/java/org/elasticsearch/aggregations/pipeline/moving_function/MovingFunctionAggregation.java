
package org.elasticsearch.aggregations.pipeline.moving_function;

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

public class MovingFunctionAggregation  implements XContentable<MovingFunctionAggregation> {
  
  static final ParseField SCRIPT = new ParseField("script");
  private String _script;
  public String getScript() { return this._script; }
  public MovingFunctionAggregation setScript(String val) { this._script = val; return this; }

  static final ParseField SHIFT = new ParseField("shift");
  private int _shift;
  private boolean _shift$isSet;
  public int getShift() { return this._shift; }
  public MovingFunctionAggregation setShift(int val) {
    this._shift = val;
    _shift$isSet = true;
    return this;
  }

  static final ParseField WINDOW = new ParseField("window");
  private int _window;
  private boolean _window$isSet;
  public int getWindow() { return this._window; }
  public MovingFunctionAggregation setWindow(int val) {
    this._window = val;
    _window$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_script != null) {
      builder.field(SCRIPT.getPreferredName(), _script);
    }
    if (_shift$isSet) {
      builder.field(SHIFT.getPreferredName(), _shift);
    }
    if (_window$isSet) {
      builder.field(WINDOW.getPreferredName(), _window);
    }
  }

  @Override
  public MovingFunctionAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MovingFunctionAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MovingFunctionAggregation, Void> PARSER =
    new ObjectParser<>(MovingFunctionAggregation.class.getName(), false, MovingFunctionAggregation::new);

  static {
    PARSER.declareString(MovingFunctionAggregation::setScript, SCRIPT);
    PARSER.declareInt(MovingFunctionAggregation::setShift, SHIFT);
    PARSER.declareInt(MovingFunctionAggregation::setWindow, WINDOW);
  }

}
