
package org.elasticsearch.query_dsl.term_level.range;

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
import org.elasticsearch.common_options.date_math.*;
import org.elasticsearch.query_dsl.term_level.range.*;
import org.elasticsearch.query_dsl.abstractions.query.*;

public class RangeQuery extends QueryBase implements XContentable<RangeQuery> {
  
  static final ParseField GT = new ParseField("gt");
  private Union2<Double, String> _gt;
  public Union2<Double, String> getGt() { return this._gt; }
  public RangeQuery setGt(Union2<Double, String> val) { this._gt = val; return this; }

  static final ParseField GTE = new ParseField("gte");
  private Union2<Double, String> _gte;
  public Union2<Double, String> getGte() { return this._gte; }
  public RangeQuery setGte(Union2<Double, String> val) { this._gte = val; return this; }

  static final ParseField LT = new ParseField("lt");
  private Union2<Double, String> _lt;
  public Union2<Double, String> getLt() { return this._lt; }
  public RangeQuery setLt(Union2<Double, String> val) { this._lt = val; return this; }

  static final ParseField LTE = new ParseField("lte");
  private Union2<Double, String> _lte;
  public Union2<Double, String> getLte() { return this._lte; }
  public RangeQuery setLte(Union2<Double, String> val) { this._lte = val; return this; }

  static final ParseField RELATION = new ParseField("relation");
  private RangeRelation _relation;
  public RangeRelation getRelation() { return this._relation; }
  public RangeQuery setRelation(RangeRelation val) { this._relation = val; return this; }

  static final ParseField TIME_ZONE = new ParseField("time_zone");
  private String _timeZone;
  public String getTimeZone() { return this._timeZone; }
  public RangeQuery setTimeZone(String val) { this._timeZone = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_gt != null) {
      builder.field(GT.getPreferredName());
      _gt.toXContent(builder, params);
    }
    if (_gte != null) {
      builder.field(GTE.getPreferredName());
      _gte.toXContent(builder, params);
    }
    if (_lt != null) {
      builder.field(LT.getPreferredName());
      _lt.toXContent(builder, params);
    }
    if (_lte != null) {
      builder.field(LTE.getPreferredName());
      _lte.toXContent(builder, params);
    }
    if (_relation != null) {
      builder.field(RELATION.getPreferredName());
      _relation.toXContent(builder, params);
    }
    if (_timeZone != null) {
      builder.field(TIME_ZONE.getPreferredName(), _timeZone);
    }
  }

  @Override
  public RangeQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RangeQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RangeQuery, Void> PARSER =
    new ObjectParser<>(RangeQuery.class.getName(), false, RangeQuery::new);

  static {
    PARSER.declareObject(RangeQuery::setGt, (p, t) ->  new Union2<Double, String>(), GT);
    PARSER.declareObject(RangeQuery::setGte, (p, t) ->  new Union2<Double, String>(), GTE);
    PARSER.declareObject(RangeQuery::setLt, (p, t) ->  new Union2<Double, String>(), LT);
    PARSER.declareObject(RangeQuery::setLte, (p, t) ->  new Union2<Double, String>(), LTE);
    PARSER.declareField(RangeQuery::setRelation, (p, t) -> RangeRelation.PARSER.apply(p), RELATION, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(RangeQuery::setTimeZone, TIME_ZONE);
  }

}
