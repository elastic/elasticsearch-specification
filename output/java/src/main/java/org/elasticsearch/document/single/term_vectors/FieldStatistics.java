
package org.elasticsearch.document.single.term_vectors;

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

public class FieldStatistics  implements XContentable<FieldStatistics> {
  
  static final ParseField DOC_COUNT = new ParseField("doc_count");
  private int _docCount;
  private boolean _docCount$isSet;
  public int getDocCount() { return this._docCount; }
  public FieldStatistics setDocCount(int val) {
    this._docCount = val;
    _docCount$isSet = true;
    return this;
  }

  static final ParseField SUM_DOC_FREQ = new ParseField("sum_doc_freq");
  private long _sumDocFreq;
  private boolean _sumDocFreq$isSet;
  public long getSumDocFreq() { return this._sumDocFreq; }
  public FieldStatistics setSumDocFreq(long val) {
    this._sumDocFreq = val;
    _sumDocFreq$isSet = true;
    return this;
  }

  static final ParseField SUM_TTF = new ParseField("sum_ttf");
  private long _sumTtf;
  private boolean _sumTtf$isSet;
  public long getSumTtf() { return this._sumTtf; }
  public FieldStatistics setSumTtf(long val) {
    this._sumTtf = val;
    _sumTtf$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_docCount$isSet) {
      builder.field(DOC_COUNT.getPreferredName(), _docCount);
    }
    if (_sumDocFreq$isSet) {
      builder.field(SUM_DOC_FREQ.getPreferredName(), _sumDocFreq);
    }
    if (_sumTtf$isSet) {
      builder.field(SUM_TTF.getPreferredName(), _sumTtf);
    }
  }

  @Override
  public FieldStatistics fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FieldStatistics.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FieldStatistics, Void> PARSER =
    new ObjectParser<>(FieldStatistics.class.getName(), false, FieldStatistics::new);

  static {
    PARSER.declareInt(FieldStatistics::setDocCount, DOC_COUNT);
    PARSER.declareLong(FieldStatistics::setSumDocFreq, SUM_DOC_FREQ);
    PARSER.declareLong(FieldStatistics::setSumTtf, SUM_TTF);
  }

}
