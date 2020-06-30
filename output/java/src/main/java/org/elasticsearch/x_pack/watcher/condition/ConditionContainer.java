
package org.elasticsearch.x_pack.watcher.condition;

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
import org.elasticsearch.x_pack.watcher.condition.*;

public class ConditionContainer  implements XContentable<ConditionContainer> {
  
  static final ParseField ALWAYS = new ParseField("always");
  private AlwaysCondition _always;
  public AlwaysCondition getAlways() { return this._always; }
  public ConditionContainer setAlways(AlwaysCondition val) { this._always = val; return this; }


  static final ParseField ARRAY_COMPARE = new ParseField("array_compare");
  private ArrayCompareCondition _arrayCompare;
  public ArrayCompareCondition getArrayCompare() { return this._arrayCompare; }
  public ConditionContainer setArrayCompare(ArrayCompareCondition val) { this._arrayCompare = val; return this; }


  static final ParseField COMPARE = new ParseField("compare");
  private CompareCondition _compare;
  public CompareCondition getCompare() { return this._compare; }
  public ConditionContainer setCompare(CompareCondition val) { this._compare = val; return this; }


  static final ParseField NEVER = new ParseField("never");
  private NeverCondition _never;
  public NeverCondition getNever() { return this._never; }
  public ConditionContainer setNever(NeverCondition val) { this._never = val; return this; }


  static final ParseField SCRIPT = new ParseField("script");
  private ScriptCondition _script;
  public ScriptCondition getScript() { return this._script; }
  public ConditionContainer setScript(ScriptCondition val) { this._script = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_always != null) {
      builder.field(ALWAYS.getPreferredName());
      _always.toXContent(builder, params);
    }
    if (_arrayCompare != null) {
      builder.field(ARRAY_COMPARE.getPreferredName());
      _arrayCompare.toXContent(builder, params);
    }
    if (_compare != null) {
      builder.field(COMPARE.getPreferredName());
      _compare.toXContent(builder, params);
    }
    if (_never != null) {
      builder.field(NEVER.getPreferredName());
      _never.toXContent(builder, params);
    }
    if (_script != null) {
      builder.field(SCRIPT.getPreferredName());
      _script.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ConditionContainer fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ConditionContainer.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ConditionContainer, Void> PARSER =
    new ObjectParser<>(ConditionContainer.class.getName(), false, ConditionContainer::new);

  static {
    PARSER.declareObject(ConditionContainer::setAlways, (p, t) -> AlwaysCondition.PARSER.apply(p, t), ALWAYS);
    PARSER.declareObject(ConditionContainer::setArrayCompare, (p, t) -> ArrayCompareCondition.PARSER.apply(p, t), ARRAY_COMPARE);
    PARSER.declareObject(ConditionContainer::setCompare, (p, t) -> CompareCondition.PARSER.apply(p, t), COMPARE);
    PARSER.declareObject(ConditionContainer::setNever, (p, t) -> NeverCondition.PARSER.apply(p, t), NEVER);
    PARSER.declareObject(ConditionContainer::setScript, (p, t) -> ScriptCondition.PARSER.apply(p, t), SCRIPT);
  }

}
