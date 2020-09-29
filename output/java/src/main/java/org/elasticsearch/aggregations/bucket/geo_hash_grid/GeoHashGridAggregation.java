
package org.elasticsearch.aggregations.bucket.geo_hash_grid;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.query_dsl.geo.bounding_box.*;
import org.elasticsearch.internal.*;

public class GeoHashGridAggregation  implements XContentable<GeoHashGridAggregation> {
  
  static final ParseField BOUNDS = new ParseField("bounds");
  private BoundingBox _bounds;
  public BoundingBox getBounds() { return this._bounds; }
  public GeoHashGridAggregation setBounds(BoundingBox val) { this._bounds = val; return this; }

  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public GeoHashGridAggregation setField(String val) { this._field = val; return this; }

  static final ParseField PRECISION = new ParseField("precision");
  private GeoHashPrecision _precision;
  private boolean _precision$isSet;
  public GeoHashPrecision getPrecision() { return this._precision; }
  public GeoHashGridAggregation setPrecision(GeoHashPrecision val) {
    this._precision = val;
    _precision$isSet = true;
    return this;
  }

  static final ParseField SHARD_SIZE = new ParseField("shard_size");
  private int _shardSize;
  private boolean _shardSize$isSet;
  public int getShardSize() { return this._shardSize; }
  public GeoHashGridAggregation setShardSize(int val) {
    this._shardSize = val;
    _shardSize$isSet = true;
    return this;
  }

  static final ParseField SIZE = new ParseField("size");
  private int _size;
  private boolean _size$isSet;
  public int getSize() { return this._size; }
  public GeoHashGridAggregation setSize(int val) {
    this._size = val;
    _size$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_bounds != null) {
      builder.field(BOUNDS.getPreferredName());
      _bounds.toXContent(builder, params);
    }
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
  public GeoHashGridAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GeoHashGridAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GeoHashGridAggregation, Void> PARSER =
    new ObjectParser<>(GeoHashGridAggregation.class.getName(), false, GeoHashGridAggregation::new);

  static {
    PARSER.declareObject(GeoHashGridAggregation::setBounds, (p, t) -> BoundingBox.PARSER.apply(p, t), BOUNDS);
    PARSER.declareString(GeoHashGridAggregation::setField, FIELD);
    PARSER.declareObject(GeoHashGridAggregation::setPrecision, (p, t) -> GeoHashPrecision.PARSER.apply(p, t), PRECISION);
    PARSER.declareInt(GeoHashGridAggregation::setShardSize, SHARD_SIZE);
    PARSER.declareInt(GeoHashGridAggregation::setSize, SIZE);
  }

}
