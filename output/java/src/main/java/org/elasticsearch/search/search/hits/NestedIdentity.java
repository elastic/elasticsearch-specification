
package org.elasticsearch.search.search.hits;

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
import org.elasticsearch.search.search.hits.*;

public class NestedIdentity  implements XContentable<NestedIdentity> {
  
  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public NestedIdentity setField(String val) { this._field = val; return this; }

  static final ParseField NESTED = new ParseField("_nested");
  private NestedIdentity _nested;
  public NestedIdentity getNested() { return this._nested; }
  public NestedIdentity setNested(NestedIdentity val) { this._nested = val; return this; }

  static final ParseField OFFSET = new ParseField("offset");
  private int _offset;
  private boolean _offset$isSet;
  public int getOffset() { return this._offset; }
  public NestedIdentity setOffset(int val) {
    this._offset = val;
    _offset$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_nested != null) {
      builder.field(NESTED.getPreferredName());
      _nested.toXContent(builder, params);
    }
    if (_offset$isSet) {
      builder.field(OFFSET.getPreferredName(), _offset);
    }
  }

  @Override
  public NestedIdentity fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NestedIdentity.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NestedIdentity, Void> PARSER =
    new ObjectParser<>(NestedIdentity.class.getName(), false, NestedIdentity::new);

  static {
    PARSER.declareString(NestedIdentity::setField, FIELD);
    PARSER.declareObject(NestedIdentity::setNested, (p, t) -> NestedIdentity.PARSER.apply(p, t), NESTED);
    PARSER.declareInt(NestedIdentity::setOffset, OFFSET);
  }

}
