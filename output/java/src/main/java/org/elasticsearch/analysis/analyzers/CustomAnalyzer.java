
package org.elasticsearch.analysis.analyzers;

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
import org.elasticsearch.analysis.analyzers.*;

public class CustomAnalyzer extends AnalyzerBase implements XContentable<CustomAnalyzer> {
  
  static final ParseField CHAR_FILTER = new ParseField("char_filter");
  private List<String> _charFilter;
  public List<String> getCharFilter() { return this._charFilter; }
  public CustomAnalyzer setCharFilter(List<String> val) { this._charFilter = val; return this; }

  static final ParseField FILTER = new ParseField("filter");
  private List<String> _filter;
  public List<String> getFilter() { return this._filter; }
  public CustomAnalyzer setFilter(List<String> val) { this._filter = val; return this; }

  static final ParseField POSITION_INCREMENT_GAP = new ParseField("position_increment_gap");
  private int _positionIncrementGap;
  private boolean _positionIncrementGap$isSet;
  public int getPositionIncrementGap() { return this._positionIncrementGap; }
  public CustomAnalyzer setPositionIncrementGap(int val) {
    this._positionIncrementGap = val;
    _positionIncrementGap$isSet = true;
    return this;
  }

  static final ParseField POSITION_OFFSET_GAP = new ParseField("position_offset_gap");
  private int _positionOffsetGap;
  private boolean _positionOffsetGap$isSet;
  public int getPositionOffsetGap() { return this._positionOffsetGap; }
  public CustomAnalyzer setPositionOffsetGap(int val) {
    this._positionOffsetGap = val;
    _positionOffsetGap$isSet = true;
    return this;
  }

  static final ParseField TOKENIZER = new ParseField("tokenizer");
  private String _tokenizer;
  public String getTokenizer() { return this._tokenizer; }
  public CustomAnalyzer setTokenizer(String val) { this._tokenizer = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_charFilter != null) {
      builder.array(CHAR_FILTER.getPreferredName(), _charFilter);
    }
    if (_filter != null) {
      builder.array(FILTER.getPreferredName(), _filter);
    }
    if (_positionIncrementGap$isSet) {
      builder.field(POSITION_INCREMENT_GAP.getPreferredName(), _positionIncrementGap);
    }
    if (_positionOffsetGap$isSet) {
      builder.field(POSITION_OFFSET_GAP.getPreferredName(), _positionOffsetGap);
    }
    if (_tokenizer != null) {
      builder.field(TOKENIZER.getPreferredName(), _tokenizer);
    }
  }

  @Override
  public CustomAnalyzer fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CustomAnalyzer.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CustomAnalyzer, Void> PARSER =
    new ObjectParser<>(CustomAnalyzer.class.getName(), false, CustomAnalyzer::new);

  static {
    PARSER.declareStringArray(CustomAnalyzer::setCharFilter, CHAR_FILTER);
    PARSER.declareStringArray(CustomAnalyzer::setFilter, FILTER);
    PARSER.declareInt(CustomAnalyzer::setPositionIncrementGap, POSITION_INCREMENT_GAP);
    PARSER.declareInt(CustomAnalyzer::setPositionOffsetGap, POSITION_OFFSET_GAP);
    PARSER.declareString(CustomAnalyzer::setTokenizer, TOKENIZER);
  }

}
