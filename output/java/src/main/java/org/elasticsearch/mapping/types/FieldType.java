
package org.elasticsearch.mapping.types;

//
// Generated code - Do not edit (enum)
//

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum FieldType implements XContentable<FieldType> {
  None("none"),
    GeoPoint("geo_point"),
    GeoShape("geo_shape"),
    Ip("ip"),
    Binary("binary"),
    Keyword("keyword"),
    Text("text"),
    SearchAsYouType("search_as_you_type"),
    Date("date"),
    DateNanos("date_nanos"),
    Boolean("boolean"),
    Completion("completion"),
    Nested("nested"),
    Object("object"),
    Murmur3("murmur3"),
    TokenCount("token_count"),
    Percolator("percolator"),
    Integer("integer"),
    Long("long"),
    Short("short"),
    Byte("byte"),
    Float("float"),
    HalfFloat("half_float"),
    ScaledFloat("scaled_float"),
    Double("double"),
    IntegerRange("integer_range"),
    FloatRange("float_range"),
    LongRange("long_range"),
    DoubleRange("double_range"),
    DateRange("date_range"),
    IpRange("ip_range"),
    Alias("alias"),
    Join("join"),
    RankFeature("rank_feature"),
    RankFeatures("rank_features"),
    Flattened("flattened"),
    Shape("shape"),
    Histogram("histogram"),
    ConstantKeyword("constant_keyword");
  private final String textRepresentation;

  private FieldType(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public FieldType fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, FieldType, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "none": return FieldType.None;
      case "geo_point": return FieldType.GeoPoint;
      case "geo_shape": return FieldType.GeoShape;
      case "ip": return FieldType.Ip;
      case "binary": return FieldType.Binary;
      case "keyword": return FieldType.Keyword;
      case "text": return FieldType.Text;
      case "search_as_you_type": return FieldType.SearchAsYouType;
      case "date": return FieldType.Date;
      case "date_nanos": return FieldType.DateNanos;
      case "boolean": return FieldType.Boolean;
      case "completion": return FieldType.Completion;
      case "nested": return FieldType.Nested;
      case "object": return FieldType.Object;
      case "murmur3": return FieldType.Murmur3;
      case "token_count": return FieldType.TokenCount;
      case "percolator": return FieldType.Percolator;
      case "integer": return FieldType.Integer;
      case "long": return FieldType.Long;
      case "short": return FieldType.Short;
      case "byte": return FieldType.Byte;
      case "float": return FieldType.Float;
      case "half_float": return FieldType.HalfFloat;
      case "scaled_float": return FieldType.ScaledFloat;
      case "double": return FieldType.Double;
      case "integer_range": return FieldType.IntegerRange;
      case "float_range": return FieldType.FloatRange;
      case "long_range": return FieldType.LongRange;
      case "double_range": return FieldType.DoubleRange;
      case "date_range": return FieldType.DateRange;
      case "ip_range": return FieldType.IpRange;
      case "alias": return FieldType.Alias;
      case "join": return FieldType.Join;
      case "rank_feature": return FieldType.RankFeature;
      case "rank_features": return FieldType.RankFeatures;
      case "flattened": return FieldType.Flattened;
      case "shape": return FieldType.Shape;
      case "histogram": return FieldType.Histogram;
      case "constant_keyword": return FieldType.ConstantKeyword;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, FieldType.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
