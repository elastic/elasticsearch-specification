
package org.elasticsearch.aggregations.bucket.geo_hash_grid;

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
import org.elasticsearch.common_abstractions.infer.field.*;
import org.elasticsearch.aggregations.bucket.geo_hash_grid.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.query_dsl.geo.bounding_box.*;

public class GeoHashGridAggregation  implements XContentable<GeoHashGridAggregation> {
  
  static final ParseField FIELD = new ParseField("field");
  private Field _field;
  public Field getField() { return this._field; }
  public GeoHashGridAggregation setField(Field val) { this._field = val; return this; }


  static final ParseField PRECISION = new ParseField("precision");
  private GeoHashPrecision _precision;
  public GeoHashPrecision getPrecision() { return this._precision; }
  public GeoHashGridAggregation setPrecision(GeoHashPrecision val) { this._precision = val; return this; }


  static final ParseField SHARD_SIZE = new ParseField("shard_size");
  private Integer _shardSize;
  public Integer getShardSize() { return this._shardSize; }
  public GeoHashGridAggregation setShardSize(Integer val) { this._shardSize = val; return this; }


  static final ParseField SIZE = new ParseField("size");
  private Integer _size;
  public Integer getSize() { return this._size; }
  public GeoHashGridAggregation setSize(Integer val) { this._size = val; return this; }


  static final ParseField BOUNDS = new ParseField("bounds");
  private BoundingBox _bounds;
  public BoundingBox getBounds() { return this._bounds; }
  public GeoHashGridAggregation setBounds(BoundingBox val) { this._bounds = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_field != null) {
      builder.field(FIELD.getPreferredName());
      _field.toXContent(builder, params);
    }
    if (_precision != null) {
      builder.field(PRECISION.getPreferredName());
      _precision.toXContent(builder, params);
    }
    if (_shardSize != null) {
      builder.field(SHARD_SIZE.getPreferredName(), _shardSize);
    }
    if (_size != null) {
      builder.field(SIZE.getPreferredName(), _size);
    }
    if (_bounds != null) {
      builder.field(BOUNDS.getPreferredName());
      _bounds.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public GeoHashGridAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GeoHashGridAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GeoHashGridAggregation, Void> PARSER =
    new ObjectParser<>(GeoHashGridAggregation.class.getName(), false, GeoHashGridAggregation::new);

  static {
    PARSER.declareObject(GeoHashGridAggregation::setField, (p, t) -> Field.createFrom(p), FIELD);
    PARSER.declareField(GeoHashGridAggregation::setPrecision, (p, t) -> GeoHashPrecision.PARSER.apply(p), PRECISION, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareInt(GeoHashGridAggregation::setShardSize, SHARD_SIZE);
    PARSER.declareInt(GeoHashGridAggregation::setSize, SIZE);
    PARSER.declareObject(GeoHashGridAggregation::setBounds, (p, t) -> BoundingBox.PARSER.apply(p, t), BOUNDS);
  }

}
