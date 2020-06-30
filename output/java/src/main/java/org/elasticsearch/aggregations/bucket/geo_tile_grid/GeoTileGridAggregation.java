
package org.elasticsearch.aggregations.bucket.geo_tile_grid;

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
import org.elasticsearch.aggregations.bucket.geo_tile_grid.*;
import org.elasticsearch.internal.*;

public class GeoTileGridAggregation  implements XContentable<GeoTileGridAggregation> {
  
  static final ParseField FIELD = new ParseField("field");
  private Field _field;
  public Field getField() { return this._field; }
  public GeoTileGridAggregation setField(Field val) { this._field = val; return this; }


  static final ParseField PRECISION = new ParseField("precision");
  private GeoTilePrecision _precision;
  public GeoTilePrecision getPrecision() { return this._precision; }
  public GeoTileGridAggregation setPrecision(GeoTilePrecision val) { this._precision = val; return this; }


  static final ParseField SHARD_SIZE = new ParseField("shard_size");
  private Integer _shardSize;
  public Integer getShardSize() { return this._shardSize; }
  public GeoTileGridAggregation setShardSize(Integer val) { this._shardSize = val; return this; }


  static final ParseField SIZE = new ParseField("size");
  private Integer _size;
  public Integer getSize() { return this._size; }
  public GeoTileGridAggregation setSize(Integer val) { this._size = val; return this; }


  
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
    builder.endObject();
    return builder;
  }

  @Override
  public GeoTileGridAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GeoTileGridAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GeoTileGridAggregation, Void> PARSER =
    new ObjectParser<>(GeoTileGridAggregation.class.getName(), false, GeoTileGridAggregation::new);

  static {
    PARSER.declareObject(GeoTileGridAggregation::setField, (p, t) -> Field.createFrom(p), FIELD);
    PARSER.declareField(GeoTileGridAggregation::setPrecision, (p, t) -> GeoTilePrecision.PARSER.apply(p), PRECISION, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareInt(GeoTileGridAggregation::setShardSize, SHARD_SIZE);
    PARSER.declareInt(GeoTileGridAggregation::setSize, SIZE);
  }

}
