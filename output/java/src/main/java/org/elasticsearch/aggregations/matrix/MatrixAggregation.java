
package org.elasticsearch.aggregations.matrix;

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

public class MatrixAggregation  implements XContentable<MatrixAggregation> {
  
  static final ParseField FIELDS = new ParseField("fields");
  private List<String> _fields;
  public List<String> getFields() { return this._fields; }
  public MatrixAggregation setFields(List<String> val) { this._fields = val; return this; }

  static final ParseField MISSING = new ParseField("missing");
  private NamedContainer<String, Double> _missing;
  public NamedContainer<String, Double> getMissing() { return this._missing; }
  public MatrixAggregation setMissing(NamedContainer<String, Double> val) { this._missing = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_fields != null) {
      builder.array(FIELDS.getPreferredName(), _fields);
    }
    if (_missing != null) {
      builder.field(MISSING.getPreferredName());
      _missing.toXContent(builder, params);
    }
  }

  @Override
  public MatrixAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MatrixAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MatrixAggregation, Void> PARSER =
    new ObjectParser<>(MatrixAggregation.class.getName(), false, MatrixAggregation::new);

  static {
    PARSER.declareStringArray(MatrixAggregation::setFields, FIELDS);
    PARSER.declareObject(MatrixAggregation::setMissing, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> double.PARSER.apply(pp, null)), MISSING);
  }

}
