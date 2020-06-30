
package org.elasticsearch.query_dsl.full_text.intervals;

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
import org.elasticsearch.query_dsl.full_text.intervals.*;
import org.elasticsearch.common_options.scripting.*;

public class IntervalsFilter  implements XContentable<IntervalsFilter> {
  
  static final ParseField AFTER = new ParseField("after");
  private IntervalsContainer _after;
  public IntervalsContainer getAfter() { return this._after; }
  public IntervalsFilter setAfter(IntervalsContainer val) { this._after = val; return this; }


  static final ParseField BEFORE = new ParseField("before");
  private IntervalsContainer _before;
  public IntervalsContainer getBefore() { return this._before; }
  public IntervalsFilter setBefore(IntervalsContainer val) { this._before = val; return this; }


  static final ParseField CONTAINED_BY = new ParseField("contained_by");
  private IntervalsContainer _containedBy;
  public IntervalsContainer getContainedBy() { return this._containedBy; }
  public IntervalsFilter setContainedBy(IntervalsContainer val) { this._containedBy = val; return this; }


  static final ParseField CONTAINING = new ParseField("containing");
  private IntervalsContainer _containing;
  public IntervalsContainer getContaining() { return this._containing; }
  public IntervalsFilter setContaining(IntervalsContainer val) { this._containing = val; return this; }


  static final ParseField NOT_CONTAINED_BY = new ParseField("not_contained_by");
  private IntervalsContainer _notContainedBy;
  public IntervalsContainer getNotContainedBy() { return this._notContainedBy; }
  public IntervalsFilter setNotContainedBy(IntervalsContainer val) { this._notContainedBy = val; return this; }


  static final ParseField NOT_CONTAINING = new ParseField("not_containing");
  private IntervalsContainer _notContaining;
  public IntervalsContainer getNotContaining() { return this._notContaining; }
  public IntervalsFilter setNotContaining(IntervalsContainer val) { this._notContaining = val; return this; }


  static final ParseField NOT_OVERLAPPING = new ParseField("not_overlapping");
  private IntervalsContainer _notOverlapping;
  public IntervalsContainer getNotOverlapping() { return this._notOverlapping; }
  public IntervalsFilter setNotOverlapping(IntervalsContainer val) { this._notOverlapping = val; return this; }


  static final ParseField OVERLAPPING = new ParseField("overlapping");
  private IntervalsContainer _overlapping;
  public IntervalsContainer getOverlapping() { return this._overlapping; }
  public IntervalsFilter setOverlapping(IntervalsContainer val) { this._overlapping = val; return this; }


  static final ParseField SCRIPT = new ParseField("script");
  private Script _script;
  public Script getScript() { return this._script; }
  public IntervalsFilter setScript(Script val) { this._script = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_after != null) {
      builder.field(AFTER.getPreferredName());
      _after.toXContent(builder, params);
    }
    if (_before != null) {
      builder.field(BEFORE.getPreferredName());
      _before.toXContent(builder, params);
    }
    if (_containedBy != null) {
      builder.field(CONTAINED_BY.getPreferredName());
      _containedBy.toXContent(builder, params);
    }
    if (_containing != null) {
      builder.field(CONTAINING.getPreferredName());
      _containing.toXContent(builder, params);
    }
    if (_notContainedBy != null) {
      builder.field(NOT_CONTAINED_BY.getPreferredName());
      _notContainedBy.toXContent(builder, params);
    }
    if (_notContaining != null) {
      builder.field(NOT_CONTAINING.getPreferredName());
      _notContaining.toXContent(builder, params);
    }
    if (_notOverlapping != null) {
      builder.field(NOT_OVERLAPPING.getPreferredName());
      _notOverlapping.toXContent(builder, params);
    }
    if (_overlapping != null) {
      builder.field(OVERLAPPING.getPreferredName());
      _overlapping.toXContent(builder, params);
    }
    if (_script != null) {
      builder.field(SCRIPT.getPreferredName());
      _script.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public IntervalsFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IntervalsFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IntervalsFilter, Void> PARSER =
    new ObjectParser<>(IntervalsFilter.class.getName(), false, IntervalsFilter::new);

  static {
    PARSER.declareObject(IntervalsFilter::setAfter, (p, t) -> IntervalsContainer.PARSER.apply(p, t), AFTER);
    PARSER.declareObject(IntervalsFilter::setBefore, (p, t) -> IntervalsContainer.PARSER.apply(p, t), BEFORE);
    PARSER.declareObject(IntervalsFilter::setContainedBy, (p, t) -> IntervalsContainer.PARSER.apply(p, t), CONTAINED_BY);
    PARSER.declareObject(IntervalsFilter::setContaining, (p, t) -> IntervalsContainer.PARSER.apply(p, t), CONTAINING);
    PARSER.declareObject(IntervalsFilter::setNotContainedBy, (p, t) -> IntervalsContainer.PARSER.apply(p, t), NOT_CONTAINED_BY);
    PARSER.declareObject(IntervalsFilter::setNotContaining, (p, t) -> IntervalsContainer.PARSER.apply(p, t), NOT_CONTAINING);
    PARSER.declareObject(IntervalsFilter::setNotOverlapping, (p, t) -> IntervalsContainer.PARSER.apply(p, t), NOT_OVERLAPPING);
    PARSER.declareObject(IntervalsFilter::setOverlapping, (p, t) -> IntervalsContainer.PARSER.apply(p, t), OVERLAPPING);
    PARSER.declareObject(IntervalsFilter::setScript, (p, t) -> Script.PARSER.apply(p, t), SCRIPT);
  }

}
