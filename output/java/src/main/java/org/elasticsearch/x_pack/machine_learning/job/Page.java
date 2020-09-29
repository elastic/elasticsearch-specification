
package org.elasticsearch.x_pack.machine_learning.job;

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

public class Page  implements XContentable<Page> {
  
  static final ParseField FROM = new ParseField("from");
  private int _from;
  private boolean _from$isSet;
  public int getFrom() { return this._from; }
  public Page setFrom(int val) {
    this._from = val;
    _from$isSet = true;
    return this;
  }

  static final ParseField SIZE = new ParseField("size");
  private int _size;
  private boolean _size$isSet;
  public int getSize() { return this._size; }
  public Page setSize(int val) {
    this._size = val;
    _size$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_from$isSet) {
      builder.field(FROM.getPreferredName(), _from);
    }
    if (_size$isSet) {
      builder.field(SIZE.getPreferredName(), _size);
    }
  }

  @Override
  public Page fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Page.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Page, Void> PARSER =
    new ObjectParser<>(Page.class.getName(), false, Page::new);

  static {
    PARSER.declareInt(Page::setFrom, FROM);
    PARSER.declareInt(Page::setSize, SIZE);
  }

}
