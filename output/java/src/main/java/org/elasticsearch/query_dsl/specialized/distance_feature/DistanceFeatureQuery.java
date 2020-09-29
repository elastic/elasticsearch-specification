
package org.elasticsearch.query_dsl.specialized.distance_feature;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.query_dsl.geo.*;
import org.elasticsearch.common_options.date_math.*;
import org.elasticsearch.common_options.geo.*;
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.query_dsl.abstractions.query.*;

public class DistanceFeatureQuery extends QueryBase implements XContentable<DistanceFeatureQuery> {
  
  static final ParseField ORIGIN = new ParseField("origin");
  private Union2<GeoCoordinate, String> _origin;
  public Union2<GeoCoordinate, String> getOrigin() { return this._origin; }
  public DistanceFeatureQuery setOrigin(Union2<GeoCoordinate, String> val) { this._origin = val; return this; }

  static final ParseField PIVOT = new ParseField("pivot");
  private Union2<Distance, String> _pivot;
  public Union2<Distance, String> getPivot() { return this._pivot; }
  public DistanceFeatureQuery setPivot(Union2<Distance, String> val) { this._pivot = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_origin != null) {
      builder.field(ORIGIN.getPreferredName());
      _origin.toXContent(builder, params);
    }
    if (_pivot != null) {
      builder.field(PIVOT.getPreferredName());
      _pivot.toXContent(builder, params);
    }
  }

  @Override
  public DistanceFeatureQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DistanceFeatureQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DistanceFeatureQuery, Void> PARSER =
    new ObjectParser<>(DistanceFeatureQuery.class.getName(), false, DistanceFeatureQuery::new);

  static {
    PARSER.declareObject(DistanceFeatureQuery::setOrigin, (p, t) ->  new Union2<GeoCoordinate, String>(), ORIGIN);
    PARSER.declareObject(DistanceFeatureQuery::setPivot, (p, t) ->  new Union2<Distance, String>(), PIVOT);
  }

}
