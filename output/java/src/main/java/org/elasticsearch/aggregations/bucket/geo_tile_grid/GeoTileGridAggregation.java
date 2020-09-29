
package org.elasticsearch.aggregations.bucket.geo_tile_grid;

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

public class GeoTileGridAggregation  implements XContentable<GeoTileGridAggregation> {
  
  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public GeoTileGridAggregation setField(String val) { this._field = val; return this; }

  static final ParseField PRECISION = new ParseField("precision");
  private GeoTilePrecision _precision;
  private boolean _precision$isSet;
  public GeoTilePrecision getPrecision() { return this._precision; }
  public GeoTileGridAggregation setPrecision(GeoTilePrecision val) {
    this._precision = val;
    _precision$isSet = true;
    return this;
  }

  static final ParseField SHARD_SIZE = new ParseField("shard_size");
  private int _shardSize;
  private boolean _shardSize$isSet;
  public int getShardSize() { return this._shardSize; }
  public GeoTileGridAggregation setShardSize(int val) {
    this._shardSize = val;
    _shardSize$isSet = true;
    return this;
  }

  static final ParseField SIZE = new ParseField("size");
  private int _size;
  private boolean _size$isSet;
  public int getSize() { return this._size; }
  public GeoTileGridAggregation setSize(int val) {
    this._size = val;
    _size$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_precision$isSet) {
      builder.field(PRECISION.getPreferredName());
      _precision.toXContent(builder, params);
    }
    if (_shardSize$isSet) {
      builder.field(SHARD_SIZE.getPreferredName(), _shardSize);
    }
    if (_size$isSet) {
      builder.field(SIZE.getPreferredName(), _size);
    }
  }

  @Override
  public GeoTileGridAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GeoTileGridAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GeoTileGridAggregation, Void> PARSER =
    new ObjectParser<>(GeoTileGridAggregation.class.getName(), false, GeoTileGridAggregation::new);

  static {
    PARSER.declareString(GeoTileGridAggregation::setField, FIELD);
    PARSER.declareObject(GeoTileGridAggregation::setPrecision, (p, t) -> GeoTilePrecision.PARSER.apply(p, t), PRECISION);
    PARSER.declareInt(GeoTileGridAggregation::setShardSize, SHARD_SIZE);
    PARSER.declareInt(GeoTileGridAggregation::setSize, SIZE);
  }

}
