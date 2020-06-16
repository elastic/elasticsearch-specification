
package org.elasticsearch.query_dsl.specialized.distance_feature;

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
import org.elasticsearch.query_dsl.geo.*;
import org.elasticsearch.common_options.date_math.*;
import org.elasticsearch.common_options.geo.*;
import org.elasticsearch.common_options.time_unit.*;

public class DistanceFeatureQuery  implements XContentable<DistanceFeatureQuery> {
  
  static final ParseField ORIGIN = new ParseField("origin");
  private Either<GeoCoordinate, DateMath> _origin;
  public Either<GeoCoordinate, DateMath> getOrigin() { return this._origin; }
  public DistanceFeatureQuery setOrigin(Either<GeoCoordinate, DateMath> val) { this._origin = val; return this; }


  static final ParseField PIVOT = new ParseField("pivot");
  private Either<Distance, Time> _pivot;
  public Either<Distance, Time> getPivot() { return this._pivot; }
  public DistanceFeatureQuery setPivot(Either<Distance, Time> val) { this._pivot = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_origin != null) {
      builder.field(ORIGIN.getPreferredName());
      _origin.map(r-> r.toXContent(builder, params), r-> r.toXContent(builder, params));
    }
    if (_pivot != null) {
      builder.field(PIVOT.getPreferredName());
      _pivot.map(r-> r.toXContent(builder, params), r-> r.toXContent(builder, params));
    }
    builder.endObject();
    return builder;
  }

  @Override
  public DistanceFeatureQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DistanceFeatureQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DistanceFeatureQuery, Void> PARSER =
    new ObjectParser<>(DistanceFeatureQuery.class.getName(), false, DistanceFeatureQuery::new);

  static {
    PARSER.declareObject(DistanceFeatureQuery::setOrigin, (p, t) ->  new Either<GeoCoordinate, DateMath>() /* TODO UnionOf */, ORIGIN);
    PARSER.declareObject(DistanceFeatureQuery::setPivot, (p, t) ->  new Either<Distance, Time>() /* TODO UnionOf */, PIVOT);
  }

}
