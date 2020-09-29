
package org.elasticsearch.aggregations.bucket.terms;

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

public class TermsInclude  implements XContentable<TermsInclude> {
  
  static final ParseField NUM_PARTITIONS = new ParseField("num_partitions");
  private long _numPartitions;
  private boolean _numPartitions$isSet;
  public long getNumPartitions() { return this._numPartitions; }
  public TermsInclude setNumPartitions(long val) {
    this._numPartitions = val;
    _numPartitions$isSet = true;
    return this;
  }

  static final ParseField PARTITION = new ParseField("partition");
  private long _partition;
  private boolean _partition$isSet;
  public long getPartition() { return this._partition; }
  public TermsInclude setPartition(long val) {
    this._partition = val;
    _partition$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_numPartitions$isSet) {
      builder.field(NUM_PARTITIONS.getPreferredName(), _numPartitions);
    }
    if (_partition$isSet) {
      builder.field(PARTITION.getPreferredName(), _partition);
    }
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
  }

}
