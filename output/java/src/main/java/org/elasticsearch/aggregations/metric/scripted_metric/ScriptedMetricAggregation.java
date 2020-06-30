
package org.elasticsearch.aggregations.metric.scripted_metric;

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
import org.elasticsearch.common_options.scripting.*;

public class ScriptedMetricAggregation  implements XContentable<ScriptedMetricAggregation> {
  
  static final ParseField COMBINE_SCRIPT = new ParseField("combine_script");
  private Script _combineScript;
  public Script getCombineScript() { return this._combineScript; }
  public ScriptedMetricAggregation setCombineScript(Script val) { this._combineScript = val; return this; }


  static final ParseField INIT_SCRIPT = new ParseField("init_script");
  private Script _initScript;
  public Script getInitScript() { return this._initScript; }
  public ScriptedMetricAggregation setInitScript(Script val) { this._initScript = val; return this; }


  static final ParseField MAP_SCRIPT = new ParseField("map_script");
  private Script _mapScript;
  public Script getMapScript() { return this._mapScript; }
  public ScriptedMetricAggregation setMapScript(Script val) { this._mapScript = val; return this; }


  static final ParseField PARAMS = new ParseField("params");
  private NamedContainer<String, Object> _params;
  public NamedContainer<String, Object> getParams() { return this._params; }
  public ScriptedMetricAggregation setParams(NamedContainer<String, Object> val) { this._params = val; return this; }


  static final ParseField REDUCE_SCRIPT = new ParseField("reduce_script");
  private Script _reduceScript;
  public Script getReduceScript() { return this._reduceScript; }
  public ScriptedMetricAggregation setReduceScript(Script val) { this._reduceScript = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_combineScript != null) {
      builder.field(COMBINE_SCRIPT.getPreferredName());
      _combineScript.toXContent(builder, params);
    }
    if (_initScript != null) {
      builder.field(INIT_SCRIPT.getPreferredName());
      _initScript.toXContent(builder, params);
    }
    if (_mapScript != null) {
      builder.field(MAP_SCRIPT.getPreferredName());
      _mapScript.toXContent(builder, params);
    }
    if (_params != null) {
      builder.field(PARAMS.getPreferredName());
      _params.toXContent(builder, params);
    }
    if (_reduceScript != null) {
      builder.field(REDUCE_SCRIPT.getPreferredName());
      _reduceScript.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ScriptedMetricAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ScriptedMetricAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ScriptedMetricAggregation, Void> PARSER =
    new ObjectParser<>(ScriptedMetricAggregation.class.getName(), false, ScriptedMetricAggregation::new);

  static {
    PARSER.declareObject(ScriptedMetricAggregation::setCombineScript, (p, t) -> Script.PARSER.apply(p, t), COMBINE_SCRIPT);
    PARSER.declareObject(ScriptedMetricAggregation::setInitScript, (p, t) -> Script.PARSER.apply(p, t), INIT_SCRIPT);
    PARSER.declareObject(ScriptedMetricAggregation::setMapScript, (p, t) -> Script.PARSER.apply(p, t), MAP_SCRIPT);
    PARSER.declareObject(ScriptedMetricAggregation::setParams, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), PARAMS);
    PARSER.declareObject(ScriptedMetricAggregation::setReduceScript, (p, t) -> Script.PARSER.apply(p, t), REDUCE_SCRIPT);
  }

}
