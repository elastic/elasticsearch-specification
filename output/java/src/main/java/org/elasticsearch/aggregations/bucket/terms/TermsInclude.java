
package org.elasticsearch.aggregations.bucket.terms;

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
import org.elasticsearch.internal.*;

public class TermsInclude  implements XContentable<TermsInclude> {
  
  static final ParseField NUM_PARTITIONS = new ParseField("num_partitions");
  private Long _numPartitions;
  public Long getNumPartitions() { return this._numPartitions; }
  public TermsInclude setNumPartitions(Long val) { this._numPartitions = val; return this; }


  static final ParseField PARTITION = new ParseField("partition");
  private Long _partition;
  public Long getPartition() { return this._partition; }
  public TermsInclude setPartition(Long val) { this._partition = val; return this; }


  static final ParseField PATTERN = new ParseField("pattern");
  private String _pattern;
  public String getPattern() { return this._pattern; }
  public TermsInclude setPattern(String val) { this._pattern = val; return this; }


  static final ParseField VALUES = new ParseField("values");
  private List<String> _values;
  public List<String> getValues() { return this._values; }
  public TermsInclude setValues(List<String> val) { this._values = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_numPartitions != null) {
      builder.field(NUM_PARTITIONS.getPreferredName(), _numPartitions);
    }
    if (_partition != null) {
      builder.field(PARTITION.getPreferredName(), _partition);
    }
    if (_pattern != null) {
      builder.field(PATTERN.getPreferredName(), _pattern);
    }
    if (_values != null) {
      builder.array(VALUES.getPreferredName(), _values);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public TermsInclude fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TermsInclude.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TermsInclude, Void> PARSER =
    new ObjectParser<>(TermsInclude.class.getName(), false, TermsInclude::new);

  static {
    PARSER.declareLong(TermsInclude::setNumPartitions, NUM_PARTITIONS);
    PARSER.declareLong(TermsInclude::setPartition, PARTITION);
    PARSER.declareString(TermsInclude::setPattern, PATTERN);
    PARSER.declareStringArray(TermsInclude::setValues, VALUES);
  }

}
