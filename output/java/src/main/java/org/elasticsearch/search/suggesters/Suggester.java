
package org.elasticsearch.search.suggesters;

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

public class Suggester  implements XContentable<Suggester> {
  
  static final ParseField ANALYZER = new ParseField("analyzer");
  private String _analyzer;
  public String getAnalyzer() { return this._analyzer; }
  public Suggester setAnalyzer(String val) { this._analyzer = val; return this; }

  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public Suggester setField(String val) { this._field = val; return this; }

  static final ParseField SIZE = new ParseField("size");
  private int _size;
  private boolean _size$isSet;
  public int getSize() { return this._size; }
  public Suggester setSize(int val) {
    this._size = val;
    _size$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_analyzer != null) {
      builder.field(ANALYZER.getPreferredName(), _analyzer);
    }
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_size$isSet) {
      builder.field(SIZE.getPreferredName(), _size);
    }
  }

  @Override
  public Suggester fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Suggester.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Suggester, Void> PARSER =
    new ObjectParser<>(Suggester.class.getName(), false, Suggester::new);

  static {
    PARSER.declareString(Suggester::setAnalyzer, ANALYZER);
    PARSER.declareString(Suggester::setField, FIELD);
    PARSER.declareInt(Suggester::setSize, SIZE);
  }

}
