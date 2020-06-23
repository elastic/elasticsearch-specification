
package org.elasticsearch.aggregations.bucket.composite;

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
import org.elasticsearch.search.search.sort.*;

public class CompositeAggregationSource  implements XContentable<CompositeAggregationSource> {
  
  static final ParseField FIELD = new ParseField("field");
  private Field _field;
  public Field getField() { return this._field; }
  public CompositeAggregationSource setField(Field val) { this._field = val; return this; }


  static final ParseField MISSING_BUCKET = new ParseField("missing_bucket");
  private Boolean _missingBucket;
  public Boolean getMissingBucket() { return this._missingBucket; }
  public CompositeAggregationSource setMissingBucket(Boolean val) { this._missingBucket = val; return this; }


  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public CompositeAggregationSource setName(String val) { this._name = val; return this; }


  static final ParseField ORDER = new ParseField("order");
  private SortOrder _order;
  public SortOrder getOrder() { return this._order; }
  public CompositeAggregationSource setOrder(SortOrder val) { this._order = val; return this; }


  static final ParseField SOURCE_TYPE = new ParseField("source_type");
  private String _sourceType;
  public String getSourceType() { return this._sourceType; }
  public CompositeAggregationSource setSourceType(String val) { this._sourceType = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_field != null) {
      builder.field(FIELD.getPreferredName());
      _field.toXContent(builder, params);
    }
    if (_missingBucket != null) {
      builder.field(MISSING_BUCKET.getPreferredName(), _missingBucket);
    }
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
    if (_order != null) {
      builder.field(ORDER.getPreferredName());
      _order.toXContent(builder, params);
    }
    if (_sourceType != null) {
      builder.field(SOURCE_TYPE.getPreferredName(), _sourceType);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CompositeAggregationSource fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CompositeAggregationSource.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CompositeAggregationSource, Void> PARSER =
    new ObjectParser<>(CompositeAggregationSource.class.getName(), false, CompositeAggregationSource::new);

  static {
    PARSER.declareObject(CompositeAggregationSource::setField, (p, t) -> Field.createFrom(p), FIELD);
    PARSER.declareBoolean(CompositeAggregationSource::setMissingBucket, MISSING_BUCKET);
    PARSER.declareString(CompositeAggregationSource::setName, NAME);
    PARSER.declareField(CompositeAggregationSource::setOrder, (p, t) -> SortOrder.PARSER.apply(p), ORDER, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(CompositeAggregationSource::setSourceType, SOURCE_TYPE);
  }

}
