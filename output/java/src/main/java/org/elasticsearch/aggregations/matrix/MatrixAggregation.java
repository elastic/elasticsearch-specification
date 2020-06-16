
package org.elasticsearch.aggregations.matrix;

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
import org.elasticsearch.internal.*;

public class MatrixAggregation  implements XContentable<MatrixAggregation> {
  
  static final ParseField FIELDS = new ParseField("fields");
  private List<Field> _fields;
  public List<Field> getFields() { return this._fields; }
  public MatrixAggregation setFields(List<Field> val) { this._fields = val; return this; }


  static final ParseField MISSING = new ParseField("missing");
  private NamedContainer<Field, Double> _missing;
  public NamedContainer<Field, Double> getMissing() { return this._missing; }
  public MatrixAggregation setMissing(NamedContainer<Field, Double> val) { this._missing = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_fields != null) {
      builder.array(FIELDS.getPreferredName(), _fields);
    }
    if (_missing != null) {
      builder.field(MISSING.getPreferredName());
      _missing.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public MatrixAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MatrixAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MatrixAggregation, Void> PARSER =
    new ObjectParser<>(MatrixAggregation.class.getName(), false, MatrixAggregation::new);

  static {
    PARSER.declareObjectArray(MatrixAggregation::setFields, (p, t) -> Field.createFrom(p), FIELDS);
    PARSER.declareObject(MatrixAggregation::setMissing, (p, t) -> new NamedContainer<>(n -> () -> new Field(n),pp -> pp.doubleValue()), MISSING);
  }

}
