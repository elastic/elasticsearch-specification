
package org.elasticsearch.x_pack.graph.explore.request;

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

public class SampleDiversity  implements XContentable<SampleDiversity> {
  
  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public SampleDiversity setField(String val) { this._field = val; return this; }

  static final ParseField MAX_DOCS_PER_VALUE = new ParseField("max_docs_per_value");
  private int _maxDocsPerValue;
  private boolean _maxDocsPerValue$isSet;
  public int getMaxDocsPerValue() { return this._maxDocsPerValue; }
  public SampleDiversity setMaxDocsPerValue(int val) {
    this._maxDocsPerValue = val;
    _maxDocsPerValue$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_maxDocsPerValue$isSet) {
      builder.field(MAX_DOCS_PER_VALUE.getPreferredName(), _maxDocsPerValue);
    }
  }

  @Override
  public SampleDiversity fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SampleDiversity.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SampleDiversity, Void> PARSER =
    new ObjectParser<>(SampleDiversity.class.getName(), false, SampleDiversity::new);

  static {
    PARSER.declareString(SampleDiversity::setField, FIELD);
    PARSER.declareInt(SampleDiversity::setMaxDocsPerValue, MAX_DOCS_PER_VALUE);
  }

}
