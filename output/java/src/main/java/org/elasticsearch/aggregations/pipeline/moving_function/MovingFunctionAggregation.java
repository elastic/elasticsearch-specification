
package org.elasticsearch.aggregations.pipeline.moving_function;

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

public class MovingFunctionAggregation  implements XContentable<MovingFunctionAggregation> {
  
  static final ParseField SCRIPT = new ParseField("script");
  private String _script;
  public String getScript() { return this._script; }
  public MovingFunctionAggregation setScript(String val) { this._script = val; return this; }


  static final ParseField WINDOW = new ParseField("window");
  private Integer _window;
  public Integer getWindow() { return this._window; }
  public MovingFunctionAggregation setWindow(Integer val) { this._window = val; return this; }


  static final ParseField SHIFT = new ParseField("shift");
  private Integer _shift;
  public Integer getShift() { return this._shift; }
  public MovingFunctionAggregation setShift(Integer val) { this._shift = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_script != null) {
      builder.field(SCRIPT.getPreferredName(), _script);
    }
    if (_window != null) {
      builder.field(WINDOW.getPreferredName(), _window);
    }
    if (_shift != null) {
      builder.field(SHIFT.getPreferredName(), _shift);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public MovingFunctionAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MovingFunctionAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MovingFunctionAggregation, Void> PARSER =
    new ObjectParser<>(MovingFunctionAggregation.class.getName(), false, MovingFunctionAggregation::new);

  static {
    PARSER.declareString(MovingFunctionAggregation::setScript, SCRIPT);
    PARSER.declareInt(MovingFunctionAggregation::setWindow, WINDOW);
    PARSER.declareInt(MovingFunctionAggregation::setShift, SHIFT);
  }

}
