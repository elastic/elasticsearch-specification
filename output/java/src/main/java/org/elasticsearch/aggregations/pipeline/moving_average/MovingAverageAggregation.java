
package org.elasticsearch.aggregations.pipeline.moving_average;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.aggregations.pipeline.moving_average.models.*;
import org.elasticsearch.internal.*;

public class MovingAverageAggregation  implements XContentable<MovingAverageAggregation> {
  
  static final ParseField MINIMIZE = new ParseField("minimize");
  private Boolean _minimize;
  public Boolean getMinimize() { return this._minimize; }
  public MovingAverageAggregation setMinimize(Boolean val) { this._minimize = val; return this; }

  static final ParseField MODEL = new ParseField("model");
  private MovingAverageModel _model;
  public MovingAverageModel getModel() { return this._model; }
  public MovingAverageAggregation setModel(MovingAverageModel val) { this._model = val; return this; }

  static final ParseField PREDICT = new ParseField("predict");
  private int _predict;
  private boolean _predict$isSet;
  public int getPredict() { return this._predict; }
  public MovingAverageAggregation setPredict(int val) {
    this._predict = val;
    _predict$isSet = true;
    return this;
  }

  static final ParseField WINDOW = new ParseField("window");
  private int _window;
  private boolean _window$isSet;
  public int getWindow() { return this._window; }
  public MovingAverageAggregation setWindow(int val) {
    this._window = val;
    _window$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_minimize != null) {
      builder.field(MINIMIZE.getPreferredName(), _minimize);
    }
    if (_model != null) {
      builder.field(MODEL.getPreferredName());
      _model.toXContent(builder, params);
    }
    if (_predict$isSet) {
      builder.field(PREDICT.getPreferredName(), _predict);
    }
    if (_window$isSet) {
      builder.field(WINDOW.getPreferredName(), _window);
    }
  }

  @Override
  public MovingAverageAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MovingAverageAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MovingAverageAggregation, Void> PARSER =
    new ObjectParser<>(MovingAverageAggregation.class.getName(), false, MovingAverageAggregation::new);

  static {
    PARSER.declareBoolean(MovingAverageAggregation::setMinimize, MINIMIZE);
    PARSER.declareObject(MovingAverageAggregation::setModel, (p, t) -> MovingAverageModel.PARSER.apply(p, t), MODEL);
    PARSER.declareInt(MovingAverageAggregation::setPredict, PREDICT);
    PARSER.declareInt(MovingAverageAggregation::setWindow, WINDOW);
  }

}
