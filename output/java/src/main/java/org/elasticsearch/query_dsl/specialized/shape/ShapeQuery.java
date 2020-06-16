
package org.elasticsearch.query_dsl.specialized.shape;

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
import org.elasticsearch.query_dsl.abstractions.field_lookup.*;
import org.elasticsearch.common_options.shape.*;
import org.elasticsearch.query_dsl.geo.shape.*;

public class ShapeQuery  implements XContentable<ShapeQuery> {
  
  static final ParseField IGNORE_UNMAPPED = new ParseField("ignore_unmapped");
  private Boolean _ignoreUnmapped;
  public Boolean getIgnoreUnmapped() { return this._ignoreUnmapped; }
  public ShapeQuery setIgnoreUnmapped(Boolean val) { this._ignoreUnmapped = val; return this; }


  static final ParseField INDEXED_SHAPE = new ParseField("indexed_shape");
  private FieldLookup _indexedShape;
  public FieldLookup getIndexedShape() { return this._indexedShape; }
  public ShapeQuery setIndexedShape(FieldLookup val) { this._indexedShape = val; return this; }


  static final ParseField RELATION = new ParseField("relation");
  private ShapeRelation _relation;
  public ShapeRelation getRelation() { return this._relation; }
  public ShapeQuery setRelation(ShapeRelation val) { this._relation = val; return this; }


  static final ParseField SHAPE = new ParseField("shape");
  private GeoShape _shape;
  public GeoShape getShape() { return this._shape; }
  public ShapeQuery setShape(GeoShape val) { this._shape = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_ignoreUnmapped != null) {
      builder.field(IGNORE_UNMAPPED.getPreferredName(), _ignoreUnmapped);
    }
    if (_indexedShape != null) {
      builder.field(INDEXED_SHAPE.getPreferredName());
      _indexedShape.toXContent(builder, params);
    }
    if (_relation != null) {
      builder.field(RELATION.getPreferredName());
      _relation.toXContent(builder, params);
    }
    if (_shape != null) {
      builder.field(SHAPE.getPreferredName());
      _shape.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ShapeQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ShapeQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ShapeQuery, Void> PARSER =
    new ObjectParser<>(ShapeQuery.class.getName(), false, ShapeQuery::new);

  static {
    PARSER.declareBoolean(ShapeQuery::setIgnoreUnmapped, IGNORE_UNMAPPED);
    PARSER.declareObject(ShapeQuery::setIndexedShape, (p, t) -> FieldLookup.PARSER.apply(p, t), INDEXED_SHAPE);
    PARSER.declareField(ShapeQuery::setRelation, (p, t) -> ShapeRelation.PARSER.apply(p), RELATION, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareObject(ShapeQuery::setShape, (p, t) -> GeoShape.PARSER.apply(p, t), SHAPE);
  }

}
