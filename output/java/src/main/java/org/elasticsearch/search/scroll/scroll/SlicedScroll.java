
package org.elasticsearch.search.scroll.scroll;

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

public class SlicedScroll  implements XContentable<SlicedScroll> {
  
  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public SlicedScroll setField(String val) { this._field = val; return this; }

  static final ParseField ID = new ParseField("id");
  private int _id;
  private boolean _id$isSet;
  public int getId() { return this._id; }
  public SlicedScroll setId(int val) {
    this._id = val;
    _id$isSet = true;
    return this;
  }

  static final ParseField MAX = new ParseField("max");
  private int _max;
  private boolean _max$isSet;
  public int getMax() { return this._max; }
  public SlicedScroll setMax(int val) {
    this._max = val;
    _max$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_id$isSet) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_max$isSet) {
      builder.field(MAX.getPreferredName(), _max);
    }
  }

  @Override
  public SlicedScroll fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SlicedScroll.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SlicedScroll, Void> PARSER =
    new ObjectParser<>(SlicedScroll.class.getName(), false, SlicedScroll::new);

  static {
    PARSER.declareString(SlicedScroll::setField, FIELD);
    PARSER.declareInt(SlicedScroll::setId, ID);
    PARSER.declareInt(SlicedScroll::setMax, MAX);
  }

}
