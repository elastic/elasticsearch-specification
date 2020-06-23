
package org.elasticsearch.aggregations.matrix.matrix_stats;

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
import org.elasticsearch.aggregations.matrix.matrix_stats.*;

public class MatrixStatsAggregation  implements XContentable<MatrixStatsAggregation> {
  
  static final ParseField MODE = new ParseField("mode");
  private MatrixStatsMode _mode;
  public MatrixStatsMode getMode() { return this._mode; }
  public MatrixStatsAggregation setMode(MatrixStatsMode val) { this._mode = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_mode != null) {
      builder.field(MODE.getPreferredName());
      _mode.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public MatrixStatsAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MatrixStatsAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MatrixStatsAggregation, Void> PARSER =
    new ObjectParser<>(MatrixStatsAggregation.class.getName(), false, MatrixStatsAggregation::new);

  static {
    PARSER.declareField(MatrixStatsAggregation::setMode, (p, t) -> MatrixStatsMode.PARSER.apply(p), MODE, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
