
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
import org.elasticsearch.search.suggesters.*;

public class Suggest<T>  implements XContentable<Suggest> {
  
  static final ParseField LENGTH = new ParseField("length");
  private int _length;
  private boolean _length$isSet;
  public int getLength() { return this._length; }
  public Suggest<T> setLength(int val) {
    this._length = val;
    _length$isSet = true;
    return this;
  }

  static final ParseField OFFSET = new ParseField("offset");
  private int _offset;
  private boolean _offset$isSet;
  public int getOffset() { return this._offset; }
  public Suggest<T> setOffset(int val) {
    this._offset = val;
    _offset$isSet = true;
    return this;
  }

  static final ParseField OPTIONS = new ParseField("options");
  private List<SuggestOption<T>> _options;
  public List<SuggestOption<T>> getOptions() { return this._options; }
  public Suggest<T> setOptions(List<SuggestOption<T>> val) { this._options = val; return this; }

  static final ParseField TEXT = new ParseField("text");
  private String _text;
  public String getText() { return this._text; }
  public Suggest<T> setText(String val) { this._text = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_length$isSet) {
      builder.field(LENGTH.getPreferredName(), _length);
    }
    if (_offset$isSet) {
      builder.field(OFFSET.getPreferredName(), _offset);
    }
    if (_options != null) {
      builder.array(OPTIONS.getPreferredName(), _options);
    }
    if (_text != null) {
      builder.field(TEXT.getPreferredName(), _text);
    }
  }

  @Override
  public Suggest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Suggest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Suggest, Void> PARSER =
    new ObjectParser<>(Suggest.class.getName(), false, Suggest::new);

  static {
    PARSER.declareInt(Suggest::setLength, LENGTH);
    PARSER.declareInt(Suggest::setOffset, OFFSET);
    SuggestOption _options = new SuggestOption<>();
    PARSER.declareObjectArray(Suggest::setOptions, (p, t) -> _options.PARSER.apply(p, t), OPTIONS);
    PARSER.declareString(Suggest::setText, TEXT);
  }

}
